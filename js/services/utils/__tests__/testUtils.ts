import utils from "../";
import { mockQuestions } from "../../../data/mockdata";

describe("Test utils functions", () => {
    describe("debounce", () => {       
        it("is called once", () => {
            jest.useFakeTimers();

            const context = {};
            const waitFunction = jest.fn();
            for (let i = 0; i < 20; i++) {
                utils.debounce(waitFunction, 500, context)();           
            }            
            expect(waitFunction.mock.calls).toHaveLength(0); // function is not called immediately

            jest.runAllTimers();
            expect(waitFunction.mock.calls).toHaveLength(1); // function should be called once even though the debounce is invoked several times
              
        });

        it("search in array", () => {    
            expect(utils.searchInDataObject(mockQuestions)).toHaveLength(mockQuestions.length);
            expect(utils.searchInDataObject(mockQuestions, 'Python')).toHaveLength(4);
            expect(utils.searchInDataObject(mockQuestions, 'Capital of Germany?')).toHaveLength(1);
        });
    });

    describe("searchInDataObject", () => {
        it("empty array", () => {
            expect(utils.searchInDataObject()).toHaveLength(0);
            expect(utils.searchInDataObject([])).toHaveLength(0);
            expect(utils.searchInDataObject(mockQuestions, 'random')).toHaveLength(0);
        });

        it("search in array", () => {    
            expect(utils.searchInDataObject(mockQuestions)).toHaveLength(mockQuestions.length);
            expect(utils.searchInDataObject(mockQuestions, 'Python')).toHaveLength(4);
            expect(utils.searchInDataObject(mockQuestions, 'Capital of Germany?')).toHaveLength(1);
        });
    });

    describe("getPercentageAsString", () => {
        it("calculate percentage", () => {
            expect(utils.getPercentageAsString(2, 10)).toEqual("20.00%");
            expect(utils.getPercentageAsString(4, 8)).toEqual("50.00%");
        });

        it("divide by zero", () => {    
            expect(utils.getPercentageAsString(2, 0)).toEqual("200.00%");
        });
    });
})