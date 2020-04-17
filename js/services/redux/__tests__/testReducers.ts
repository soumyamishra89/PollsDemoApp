import { pollQuestionsReducer, errorMessageReducer } from '../reducer/reducers';
import { mockQuestions } from '../../../data/mockdata';
import { ReduxActionType } from '../../../data/types/Redux';
import { getPollQuestionsAction, getApiErrorAction } from '../actions';

describe("Test Redux reducers", () => {
    describe("pollQuestionsReducer", () => {
        it("should return the new state", () => {
            expect(pollQuestionsReducer(undefined, getPollQuestionsAction(mockQuestions))).toEqual(mockQuestions);
        })
        it("should return the previous state", () => {
            expect(pollQuestionsReducer(undefined, {type: ReduxActionType.API_ERROR, data: undefined})).toEqual(undefined);
            expect(pollQuestionsReducer([], {type: ReduxActionType.API_ERROR, data: undefined})).toEqual([]);
        })
    })
    describe("errorMessageReducer", () => {
        it("should return the new state", () => {
            expect(errorMessageReducer(undefined, getApiErrorAction())).toEqual('Failed to fetch data');
        })
        it("should return the empty state", () => {
            expect(errorMessageReducer(undefined, {type: ReduxActionType.POLL_QUESTION, data: undefined})).toEqual('');
        })
    });
})