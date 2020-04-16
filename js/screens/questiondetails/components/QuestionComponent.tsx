import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

interface Props {
    question: string,
    publishedDate: string
}
export default function QuestionComponent(props: Props) {
    return (
        <View style={styles.questionContainer}>
            <Title>{props.question}</Title>
            <Paragraph>{props.publishedDate}</Paragraph>
        </View>
    )
}

const styles = StyleSheet.create({
    questionContainer: {
        width: '100%',
        marginVertical: 16
    }
})