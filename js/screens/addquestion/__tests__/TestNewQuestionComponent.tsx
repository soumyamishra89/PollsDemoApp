import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import NewQuestionComponent from '../components/NewQuestionComponent';

describe("NewQuestionComponent", () => {
    describe("Snapshot test", () => {
        it("With question data", () => {
            const newQuestionTree = renderer.create(<NewQuestionComponent navigation={{}} addNewQuestion={jest.fn()} />).toJSON();
            expect(newQuestionTree).toMatchSnapshot();

        })
    })
})