import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import QuestionComponent from '../components/QuestionComponent';
import { mockQuestions } from '../../../data/mockdata';

describe("QuestionComponent", () => {
    describe("Snapshot test", () => {
        it("With question data", () => {
            const pollQuestion = mockQuestions[0];
            const questionTree = renderer.create(<QuestionComponent question={pollQuestion.question} publishedDate={pollQuestion.published_at} />).toJSON();
            expect(questionTree).toMatchSnapshot();

        })
    })
})