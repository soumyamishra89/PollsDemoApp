import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { PollQuestion, PollChoice } from '../../../data/types/PollsData';
import Styles from '../../../styles';
import Appbar from '../../common/compoonent/Appbar';
import ChoicesComponent from './ChoicesComponent';
import QuestionComponent from './QuestionComponent';
import colors from '../../../styles/colors';
import { NavigationProps } from '../../../data/types/ScreenProps';

interface Props extends NavigationProps {
    postVote: (choiceUrl: string) => Promise<boolean>,
    pollQuestion?: PollQuestion
}
export default function QuestionDetailsComponent(props: Props) {
    const [selectedChoice, setSelectedChoice] = useState<PollChoice | undefined>(undefined);
    const [loading, setLoading] = useState(false);

    const onVote = async () => {
        if (selectedChoice) {
            setLoading(true);
            const isVotingSuccess = await props.postVote(selectedChoice.url);
            if (isVotingSuccess) {
                props.navigation.goBack();
            } else {
                setLoading(false);
            }
        }
    }

    const inset = useSafeArea();
    return (
        <View style={[Styles.matchParent, {paddingBottom: inset.bottom}]}>
            <Appbar title="Poll Question"/>
            <View style={Styles.contentContainer}>
                <QuestionComponent question={props.pollQuestion?.question || ''} publishedDate={props.pollQuestion?.published_at.split('T')[0] || ''}/>
                <ChoicesComponent choices={props.pollQuestion?.choices || []} totalVotes={props.pollQuestion?.totalVotes || 0} selectedChoice={selectedChoice} onChoiceChange={setSelectedChoice}/>
            </View>
            <Button mode="contained" onPress={onVote} disabled={!selectedChoice} style={[Styles.button, !selectedChoice && Styles.disabledButton]} loading={loading}>Vote</Button>
        </View>
    )
}