import { PollQuestion } from "./PollsData";

export interface AppState {
    pollQuestions?: PollQuestion[],
    errorMessage?: string
}

export enum ReduxActionType {
    POLL_QUESTION = 'POLL_QUESTION',
    API_ERROR = 'API_ERROR'
}

export interface ReduxAction {
    data: any;
    type: ReduxActionType
}
