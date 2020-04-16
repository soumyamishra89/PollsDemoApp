/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../services/redux/store';
import QuestionsScreen from './questionlist/QuestionsScreen';
import QuestionDetailsScreen from './questiondetails/QuestionDetailsScreen';
import AddNewQuestionScreen from './addquestion/AddNewQuestionScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
          <Stack.Screen name="QuestionDetailsScreen" component={QuestionDetailsScreen} />
          <Stack.Screen name="AddNewQuestionScreen" component={AddNewQuestionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
