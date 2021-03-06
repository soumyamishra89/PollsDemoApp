import { PollQuestion, PollChoice } from "../../../data/types/PollsData";
import { ReduxAction, ReduxActionType } from "../../../data/types/Redux";

function pollQuestionsReducer(state: PollQuestion[] | null = null, action: ReduxAction) {
    switch (action.type) {
        case ReduxActionType.POLL_QUESTION:
            let pollQuestions = action.data || [];
           
            pollQuestions = pollQuestions.map((pollQuestion: any) => ({
                ...pollQuestion,
                totalVotes: Array.isArray(pollQuestion.choices) ? pollQuestion.choices.reduce((totalVotes: number, choice: PollChoice) => totalVotes + choice.votes, 0) : 0
            }))
        
            return pollQuestions;
        default: return state;
    }
}

function errorMessageReducer(state: string = '', action: ReduxAction) {
    switch (action.type) {
        case ReduxActionType.API_ERROR:            
            return action.data;
        default: return state;
    }
}

export {
    pollQuestionsReducer,
    errorMessageReducer
}