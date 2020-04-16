import { combineReducers } from "redux";
import { 
   pollQuestionsReducer,
   errorMessageReducer
} from './reducers';

const appReducer = combineReducers({
    pollQuestions: pollQuestionsReducer,
    errorMessage: errorMessageReducer
});

export default appReducer;