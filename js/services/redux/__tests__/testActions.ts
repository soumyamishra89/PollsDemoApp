import { getPollQuestionsAction, getApiErrorAction } from '../actions';
import { mockQuestions } from '../../../data/mockdata';
import { ReduxActionType } from '../../../data/types/Redux';

describe("Test Redux actions", () => {
    describe("getQuestionsAction", () => {
        it("should create a Poll Question action", () => {
            const action = {
                type: ReduxActionType.POLL_QUESTION,
                data: mockQuestions
            }
            expect(getPollQuestionsAction(mockQuestions)).toEqual(action);
        })
    })
    describe("getApiErrorAction", () => {
        it("should create an error action", () => {
            const action = {
                type: ReduxActionType.API_ERROR,
                data: 'Failed to fetch data'
            }
            expect(getApiErrorAction()).toEqual(action);
        })
    });
})