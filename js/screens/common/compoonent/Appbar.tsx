import React from 'react';
import { Appbar as AppbarPaper, Searchbar } from 'react-native-paper';
import utils from '../../../services/utils';
import colors from '../../../styles/colors';

interface Props {
    title: string,
    enableSearch?: boolean,
    searchCallback?: (searchedData: any) => void,
    searchData?: any
}

interface State { 
    isSearchEnabled: boolean,
    searchText: string
}
export default class Appbar extends React.Component<Props, State> {

    state: State = {
        isSearchEnabled: false,
        searchText: ''
    }

    enableDisableSearch = () => {
        this.setState({isSearchEnabled: !this.state.isSearchEnabled, searchText: ''}, () => {
            if (!this.state.searchText) {
                this.props.searchCallback?.(this.props.searchData);
            }
        });
    } 

    handleSearchText = (searchText: string) => {
        this.setState({searchText});
        utils.debounce(this.searchInObject, 400, this)();
    }

    searchInObject = () => {
        const { searchData, searchCallback } = this.props; 
        if (searchCallback && searchData) {
           const searchResult = utils.searchInDataObject(searchData, this.state.searchText);
           searchCallback(searchResult);
        }
    }

    render() {
      return (
        <AppbarPaper.Header style={{backgroundColor: colors.primary}}>
            {this.state.isSearchEnabled ?  
            <Searchbar
                style={{flex: 1}}
                placeholder="Search"
                onChangeText={this.handleSearchText}
                value={this.state.searchText}
            /> : 
            <AppbarPaper.Content
                title={this.props.title}
            />}
            {this.props.enableSearch && <AppbarPaper.Action icon={this.state.isSearchEnabled? "close" : "magnify"} onPress={this.enableDisableSearch} />}

        </AppbarPaper.Header>
      );
    }
}
