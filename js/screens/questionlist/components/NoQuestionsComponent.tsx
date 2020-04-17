import React from 'react';
import { View } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import styles from '../../../styles';

export default function NoQuestionsComponent() {
    return (
    <View style={[styles.contentContainer, styles.centerAligned]}>
        <Title>No Questions.</Title>
        <Paragraph>Add one by clicking on the add button</Paragraph>
    </View>)
}