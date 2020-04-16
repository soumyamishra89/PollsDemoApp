import React from 'react';
import { Card as CardPaper, Title, Caption, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
    action: () => void
    title: string,
    description: string,
    footerText?: string
}

export default function Card(props: Props) {
    return (
    <CardPaper elevation={4} onPress={props.action} style={styles.card}>
        <CardPaper.Content style={styles.content}>
            <Title style={styles.cardTitle}>{props.title}</Title>
        
            <Paragraph>{props.description}</Paragraph>        
        </CardPaper.Content>
        {props.footerText && <CardPaper.Actions style={styles.footer}>
            <Caption>{props.footerText}</Caption>
        </CardPaper.Actions>}
    </CardPaper>
  )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        minHeight: 144
    },
    cardTitle: {
        fontWeight: 'bold'
    },
    content: {
        flex: 1
    },
    footer: {
        marginLeft: 8
    }
})