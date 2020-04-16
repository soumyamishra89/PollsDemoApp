import { Dispatch } from 'redux';
import { getPollQuestionsAction, getApiErrorAction } from '../redux/actions';
import { CreatePollQuestion } from '../../data/types/PollsData';

function getPollQuestions() {
    return async (dispatch: Dispatch) => {
        try {
            const resp = await fetch('https://polls.apiblueprint.org/questions');
            if (resp.status === 200) {
                const data = await resp.json();
                return dispatch(getPollQuestionsAction(data));                
            }
        } catch(err) {
        }
        return dispatch(getApiErrorAction());
    }
}

/**
 * Return true if a new question is successfully posted
 */
async function postPollQuestion(newQuestion: CreatePollQuestion) {
    const resp = await fetch('https://polls.apiblueprint.org/questions', { method: "POST", body: JSON.stringify(newQuestion) });
    if (resp.status === 201) {
        return true;
    }
    return false;
}

/**
 * Return true if successfully voted 
 */
async function voteOnAChoice(choiceUrl: string) {
    const resp = await fetch(`https://polls.apiblueprint.org${choiceUrl}`, { method: 'POST' });
    if (resp.status === 201) {
        return true;
    }
    return false;
}

export default {
    getPollQuestions,
    postPollQuestion,
    voteOnAChoice
}