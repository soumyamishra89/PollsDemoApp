import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../data/types/Redux';
import { NavigationProps } from '../../data/types/ScreenProps';
import api from '../../services/remote/api';
import { mapPollQuestionDispatchToProps } from '../../services/remote/dispatch';
import NewQuestionComponent from './components/NewQuestionComponent';

interface Props extends NavigationProps {
    getPollQuestions: () => void,
}

class AddNewQuestionScreen extends React.Component<Props> {

    addNewQuestion = async (question: string, choices: string[]) => {
        if (question && choices.length === 4) {
           const postSuccess = await api.postPollQuestion({question, choices});
           if (postSuccess) {
               this.props.getPollQuestions();
           }
           return postSuccess;
        }
        return false;
    }

    render() {
        return <NewQuestionComponent addNewQuestion={this.addNewQuestion} navigation={this.props.navigation} />
    }
}

const mapStateToProps = (state: AppState, ownProps: NavigationProps) => ({
    pollQuestion: state.pollQuestions.find(pollQuestion => pollQuestion.url === ownProps.route?.params?.questionUrl)
})

export default connect(mapStateToProps, mapPollQuestionDispatchToProps)(AddNewQuestionScreen);