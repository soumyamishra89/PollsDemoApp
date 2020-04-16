import { PollQuestion } from "../../../data/types/PollsData";
import { ReduxActionType } from "js/data/types/Redux";

export function getQuestionsAction(data: PollQuestion[]) {
    return {
        type: ReduxActionType.POLL_QUESTION,
        data
    }
}

export function getApiErrorAction() {
    return {
        type: ReduxActionType.API_ERROR,
        data: 'Failed to fetch data'
    }
}