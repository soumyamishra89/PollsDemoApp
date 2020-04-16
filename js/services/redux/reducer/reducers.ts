import { PollQuestion } from "../../../data/types/PollsData";
import { ReduxAction, ReduxActionType } from "../../../data/types/Redux";

function pollQuestionsReducer(state: PollQuestion[] = [], action: ReduxAction) {
    switch (action.type) {
        case ReduxActionType.POLL_QUESTION: 
            return action.data;
        default: return state;
    }
}

export {
    pollQuestionsReducer
}