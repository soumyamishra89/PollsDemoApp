import React from 'react';
import { RadioButton as RadioButtonPaper } from 'react-native-paper';
import { PollChoice } from '../../../data/types/PollsData';
import RadioButton from '../../common/compoonent/RadioButton';
import utils from '../../../services/utils';

interface Props {
    totalVotes: number
    choices: PollChoice[],
    selectedChoice?: PollChoice,
    onChoiceChange: (choice: PollChoice) => void
}
export default function ChoicesComponent(props: Props) {
    
    const onChoiceChange = (choice: string) => {
        const selectedChoice = props.choices.find(c => c.choice === choice);
        selectedChoice && props.onChoiceChange(selectedChoice);
    }
    return (       
        <RadioButtonPaper.Group 
        onValueChange={onChoiceChange}
        value={props.selectedChoice?.choice || ''}>
            {props.choices.map(choice => <RadioButton 
            key={choice.url}
            isActive={props.selectedChoice?.choice === choice.choice} 
            value={choice.choice} 
            subtext={utils.getPercentageAsString(choice.votes, props.totalVotes)}
            activePercentWidth={utils.getPercentageAsString(choice.votes, props.totalVotes)}/>)}
        </RadioButtonPaper.Group>
    )
}