import { NavigationAction } from '@react-navigation/native';
import { PollQuestion } from './PollsData';

export interface NavigationProps {
    navigation: any
}

export interface PollQuestionsProps {
    pollQuestions: PollQuestion[]
}