import React from 'react';
import { View } from "react-native";

export const createStackNavigator = jest.fn(() => ({
    Navigator: jest.fn((props: any) => <View {...props}/>), 
    Screen: jest.fn((props: any): any => <View {...props}/>)
}))
