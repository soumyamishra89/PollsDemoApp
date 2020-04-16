import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import QuestionListComponent from '../components/QuestionListComponent';
import { mockQuestions } from '../../../data/mockdata';

describe("QuestionListComponent", () => {
    describe("Snapshot test", () => {
        it("Empty list", () => {
            const questionListTree = renderer.create(<QuestionListComponent pollQuestions={[]} navigation={{}}/>).toJSON();
            expect(questionListTree).toMatchSnapshot();

        });

        it("With questions data", () => {
            const questionListTree = renderer.create(<QuestionListComponent pollQuestions={mockQuestions} navigation={{}}/>).toJSON();
            expect(questionListTree).toMatchSnapshot();
        })
    })
})