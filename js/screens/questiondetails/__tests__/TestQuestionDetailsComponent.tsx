import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import QuestionDetailsComponent from '../components/QuestionDetailsComponent';
import { mockQuestions } from '../../../data/mockdata';

describe("QuestionDetailsComponent", () => {
    describe("Snapshot test", () => {
        it("With question data", () => {            
            const pollQuestion = mockQuestions[0];
            const questionTree = renderer.create(<QuestionDetailsComponent postVote={jest.fn()}
            pollQuestion={pollQuestion} navigation={{}}/>).toJSON();
            expect(questionTree).toMatchSnapshot();

        });

    });
})