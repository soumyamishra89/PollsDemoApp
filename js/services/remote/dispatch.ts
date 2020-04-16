import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../data/types/Redux";
import api from "./api";

export const mapPollQuestionDispatchToProps = (dispatch: ThunkDispatch<AppState, any, any>) => ({
    getPollQuestions: () => dispatch(api.getPollQuestions())
})