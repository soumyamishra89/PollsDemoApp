import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../data/types/Redux';
import { PollQuestion } from '../../data/types/PollsData';
import { NavigationProps } from '../../data/types/ScreenProps';
import QuestionDetailsComponent from './components/QuestionDetailsComponent';
import api from '../../services/remote/api';
import { mapPollQuestionDispatchToProps } from '../../services/remote/dispatch';

interface Props extends NavigationProps {
    pollQuestion?: PollQuestion,
    getPollQuestions: () => void,
}

class QuestionDetailsScreen extends React.Component<Props> {

    postVote = async (choiceUrl: string) => {
        if (choiceUrl) {
           const isVotingSuccess = await api.voteOnAChoice(choiceUrl);
           if (isVotingSuccess) {
               this.props.getPollQuestions();
           }
           return isVotingSuccess;
        }
        return false;
    }

    render() {
        return <QuestionDetailsComponent pollQuestion={this.props.pollQuestion} postVote={this.postVote} navigation={this.props.navigation}/>
    }
}

const mapStateToProps = (state: AppState, ownProps: NavigationProps) => ({
    pollQuestion: state.pollQuestions.find(pollQuestion => pollQuestion.url === ownProps.route?.params?.questionUrl)
})

export default connect(mapStateToProps, mapPollQuestionDispatchToProps)(QuestionDetailsScreen);