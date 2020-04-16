import { Dispatch } from 'redux';
import { getQuestionsAction, getApiErrorAction } from '../redux/actions';
import { PollQuestion, CreatePollQuestion } from 'js/data/types/PollsData';

function getQuestions() {
    return async (dispatch: Dispatch) => {
        try {
            const resp = await fetch('https://polls.apiblueprint.org/questions');
            if (resp.status === 200) {
                const data = await resp.json();
                return dispatch(getQuestionsAction(data));                
            }
        } catch(err) {
        }
        return dispatch(getApiErrorAction());
    }
}

/**
 * Return true if a new question is successfully posted
 */
async function postQuestion(newQuestion: CreatePollQuestion) {
    const resp = await fetch('https://polls.apiblueprint.org/questions', { method: "POST", body: newQuestion });
    if (resp.status === 201) {
        return true;
    }
    return false;
}

/**
 * Return true if successfully voted 
 */
async function voteOnAChoice(questionId: string, choiceId: string) {
    const resp = await fetch(`https://polls.apiblueprint.org/questions/${questionId}/choices/${choiceId}`, { method: 'POST' });
    if (resp.status === 201) {
        return true;
    }
    return false;
}

export default {
    getQuestions,
    postQuestion,
    voteOnAChoice
}