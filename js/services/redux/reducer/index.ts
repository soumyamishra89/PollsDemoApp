import { combineReducers } from "redux";
import { 
   pollQuestionsReducer
} from './reducers';

const appReducer = combineReducers({
    pollQuestions: pollQuestionsReducer
});

export default appReducer;