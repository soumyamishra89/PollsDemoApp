import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ChoicesComponent from '../components/ChoicesComponent';
import { mockQuestions } from '../../../data/mockdata';

describe("ChoicesComponent", () => {
    describe("Snapshot test", () => {
        it("With no choice selected", () => {
            const pollQuestion = mockQuestions[0];
            const choicesTree = renderer.create(<ChoicesComponent totalVotes={pollQuestion.totalVotes}
                choices={pollQuestion.choices}
                onChoiceChange={jest.fn()} />).toJSON();
            expect(choicesTree).toMatchSnapshot();

        })

        it("With choice selected", () => {
            const pollQuestion = mockQuestions[0];
            const choicesTree = renderer.create(<ChoicesComponent totalVotes={pollQuestion.totalVotes}
                choices={pollQuestion.choices}
                selectedChoice={pollQuestion.choices[0]}
                onChoiceChange={jest.fn()} />).toJSON();
            expect(choicesTree).toMatchSnapshot();

        })
    })
})