import React from 'react';
import { View, StyleSheet } from 'react-native'
import { RadioButton as RadioButtonPaper, Text } from 'react-native-paper';
import colors from '../../../styles/colors';

interface Props {
    value: string,
    subtext?: string,
    isActive: boolean,
    activePercentWidth?: string
}

export default function RadioButton(props: Props) {
    return (
        <View style={[styles.container, styles.textBackgroundInActive]}>
            <View style={[styles.percentContainer, props.isActive && [styles.textBackgroundActive, {width: props.activePercentWidth || '0%'}]]} />
            <View style={[styles.textAndButtonContainer]}>
                <RadioButtonPaper.Android value={props.value} color={"#3C7AFF"} uncheckedColor="#BFD3FE"/>
                <Text style={[props.isActive && styles.textActive]}>{props.value}</Text>
            </View>
            <Text style={[{marginRight: 8}, props.isActive && styles.textActive]}>{props.subtext}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    textAndButtonContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textActive: {
        color: colors.textActive
    },
    textBackgroundActive: {
        backgroundColor: colors.backgroundActive
    },
    textBackgroundInActive: {
        backgroundColor: colors.backgroundInactive
    },
    percentContainer: {
        position: 'absolute',
        height: '100%',
        borderRadius: 24
    }
})