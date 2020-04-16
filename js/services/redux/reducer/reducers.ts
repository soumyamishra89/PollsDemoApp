import { PollQuestion, PollChoice } from "../../../data/types/PollsData";
import { ReduxAction, ReduxActionType } from "../../../data/types/Redux";

function pollQuestionsReducer(state: PollQuestion[] = [], action: ReduxAction) {
    switch (action.type) {
        case ReduxActionType.POLL_QUESTION:
            let pollQuestions = action.data;
            if (pollQuestions) {
                pollQuestions = pollQuestions.map((pollQuestion: any) => ({
                    ...pollQuestion,
                    totalVotes: Array.isArray(pollQuestions.choices) ? pollQuestions.choices.reduce((totalVotes: number, choice: PollChoice) => totalVotes + choice.votes, 0) : 0
                }))
            }
            return pollQuestions;
        default: return state;
    }
}

export {
    pollQuestionsReducer
}