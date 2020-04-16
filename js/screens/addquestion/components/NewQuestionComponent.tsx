import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TextInput, Title, Button } from 'react-native-paper';
import { useSafeArea } from 'react-native-safe-area-context';
import Styles from '../../../styles';
import Appbar from '../../../screens/common/compoonent/Appbar';
import colors from '../../../styles/colors';
import { NavigationProps } from '../../../data/types/ScreenProps';

interface Props extends NavigationProps {
    addNewQuestion: (question: string, choices: string[]) => Promise<boolean>
}

export default function NewQuestionComponent(props: Props) {
    const [newQuestion, setNewQuestion] = useState('');
    const [choice1, setChoice1] = useState('');
    const [choice2, setChoice2] = useState('');
    const [choice3, setChoice3] = useState('');
    const [choice4, setChoice4] = useState('');

    const [loading, setLoading] = useState(false);

    const addNewQuestion = async () => {
        setLoading(true);
        const postSuccess = await props.addNewQuestion(newQuestion, [choice1, choice2, choice3, choice4]);
        if (postSuccess) {
            props.navigation.goBack();
        } else {
            setLoading(false);
        }
    }

    const disableButton = !newQuestion || !choice1 || !choice2 || !choice3 || !choice4;
    const inset = useSafeArea();
    
    return (
        <View style={[Styles.matchParent, {paddingBottom: inset.bottom}]}>
            <Appbar title="New Qeestion" />
            <ScrollView style={Styles.contentContainer} contentContainerStyle={{flex: 1}}>
                <TextInput
                    label='New question'
                    mode="outlined"
                    value={newQuestion}
                    onChangeText={setNewQuestion}
                    multiline
                    theme={textInputTheme}
                />
                {
                    // CHoices section
                }
                <Title style={styles.title}>Enter your choices</Title>
                <TextInput
                    label='Choice 1'
                    value={choice1}
                    onChangeText={setChoice1}
                    style={styles.choiceText}
                    theme={textInputTheme}
                />
                <TextInput
                    label='Choice 2'
                    value={choice2}
                    onChangeText={setChoice2}
                    style={styles.choiceText}
                    theme={textInputTheme}
                />
                <TextInput
                    label='Choice 3'
                    value={choice3}
                    onChangeText={setChoice3}
                    style={styles.choiceText}
                    theme={textInputTheme}
                />
                <TextInput
                    label='Choice 4'
                    value={choice4}
                    onChangeText={setChoice4}
                    style={styles.choiceText}
                    underlineColor={colors.primary}
                    theme={textInputTheme}
                />
            </ScrollView>
            <Button mode="contained" onPress={addNewQuestion} disabled={disableButton} style={[Styles.button, disableButton && Styles.disabledButton]} loading={loading}>Vote</Button>
        </View>
    )
}

const textInputTheme: any = {colors: {primary: colors.primary}}
const styles = StyleSheet.create({
    title: {
        color: colors.primary,
        marginTop: 16
    },
    choiceText: {
        marginVertical: 8
    }
})