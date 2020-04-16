import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { NavigationProps, PollQuestionsProps } from '../../data/types/ScreenProps';
import { AppState } from '../../data/types/Redux';
import api from '../../services/remote/api';
import QuestionListComponent from './components/QuestionListComponent';

interface Props extends NavigationProps, PollQuestionsProps {
    getPollQuestions: () => void
}

class QuestionsScreen extends React.Component<Props> {

    componentDidMount() {
        this.props.getPollQuestions();
    }

    render() {
        return <QuestionListComponent pollQuestions={this.props.pollQuestions} navigation={this.props.navigation}/>;
    }
}

const mapStateToProps = (state: AppState) => ({
    pollQuestions: state.pollQuestions
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, any, any>) => ({
    getPollQuestions: () => dispatch(api.getPollQuestions())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsScreen);