import React from 'react';
import { Card as CardPaper, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
    action: () => void
    title: string,
    description: string
}

export default function Card(props: Props) {
    return (
    <CardPaper elevation={4} onPress={props.action} style={styles.card}>
        <CardPaper.Title title={props.title} titleStyle={styles.cardTitle}/>
        <CardPaper.Content>
            <Title>{props.description}</Title>        
        </CardPaper.Content>
    </CardPaper>
  )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: 168
    },
    cardTitle: {
        fontWeight: 'bold'
    }
})