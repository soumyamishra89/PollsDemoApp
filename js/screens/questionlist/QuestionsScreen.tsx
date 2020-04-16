import React from 'react';
import { connect } from 'react-redux';
import { NavigationProps, PollQuestionsProps } from '../../data/types/ScreenProps';
import { AppState } from '../../data/types/Redux';
import QuestionListComponent from './components/QuestionListComponent';
import { Snackbar } from 'react-native-paper';
import { mapPollQuestionDispatchToProps } from '../../services/remote/dispatch';

interface Props extends NavigationProps, PollQuestionsProps {
    getPollQuestions: () => void,
    errorMessage?: string
}

interface State {
    isSnackbarVisible: boolean
}

class QuestionsScreen extends React.Component<Props, State> {

    state: State = {
        isSnackbarVisible: false
    }

    componentDidMount() {
        this.props.getPollQuestions();
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.errorMessage && this.props.errorMessage !== prevProps.errorMessage) {
            this.showSnackbar();
        }
    }

    onDismissSnackBar = () => {
        this.setState({isSnackbarVisible: false});
    }

    showSnackbar = () => {
        this.setState({isSnackbarVisible: true});
    }

    render() {
        return <>
            <QuestionListComponent pollQuestions={this.props.pollQuestions} navigation={this.props.navigation}/>
            <Snackbar
            visible={this.state.isSnackbarVisible}
            onDismiss={this.onDismissSnackBar}
            >
            {this.props.errorMessage}
            </Snackbar>
        </>;
    }
}

const mapStateToProps = (state: AppState) => ({
    pollQuestions: state.pollQuestions,
    errorMessage: state.errorMessage
});

export default connect(mapStateToProps, mapPollQuestionDispatchToProps)(QuestionsScreen);