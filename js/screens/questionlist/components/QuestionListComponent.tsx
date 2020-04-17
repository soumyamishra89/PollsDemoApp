import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { FAB, ActivityIndicator } from 'react-native-paper';
import { useSafeArea } from 'react-native-safe-area-context';
import Styles from '../../../styles';
import Appbar from '../../../screens/common/compoonent/Appbar';
import { PollQuestion } from '../../../data/types/PollsData';
import { PollQuestionsProps, NavigationProps } from '../../../data/types/ScreenProps';
import Card from '../../../screens/common/compoonent/Card';
import colors from '../../../styles/colors';
import NoQuestionsComponent from './NoQuestionsComponent';

interface Props extends PollQuestionsProps, NavigationProps {}

export default function QuestionListComponent(props: Props) {

    const [searchedQuestions, setSearchedQuestion] = useState<PollQuestion[] | undefined>();

    const goToQuestionDetailsScreen = (questionUrl: string) => props.navigation.navigate("QuestionDetailsScreen", { questionUrl });
    const goToAddQuestionScreen = () => props.navigation.navigate("AddNewQuestionScreen");

    const renderFlatListItem = useCallback(({ item, index }: {item: PollQuestion, index: number}): any => {
        return <Card 
            title={item.question} 
            action={() => goToQuestionDetailsScreen(item.url)} 
            description={item.published_at.split('T')[0]} 
            footerText={item.totalVotes.toString() + " votes"}
            topStyle={{backgroundColor: colors.random[index % colors.random.length]}}
            />;
    }, []);

    const inset = useSafeArea();

    return (
        <View style={[Styles.matchParent, {paddingBottom: inset.bottom}]} >
            <Appbar title="Poll Questions" enableSearch searchCallback={setSearchedQuestion} searchData={props.pollQuestions} />
            {props.pollQuestions ? props.pollQuestions.length === 0 ? 
            <NoQuestionsComponent />
            : <FlatList 
                data={searchedQuestions || props.pollQuestions}
                renderItem={renderFlatListItem}
                keyExtractor={(item) => item.url}
                style={styles.container}
                showsVerticalScrollIndicator={false}
            /> : <View style={[Styles.contentContainer, Styles.centerAligned]}><ActivityIndicator /></View>}
             <FAB
                style={[styles.fab, {bottom: inset.bottom}]}
                icon="plus"
                onPress={goToAddQuestionScreen}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eeeeee'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colors.primary
    }
})