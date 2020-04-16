import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import Styles from '../../../styles';
import Appbar from '../../../screens/common/compoonent/Appbar';
import { PollQuestion } from '../../../data/types/PollsData';
import { PollQuestionsProps, NavigationProps } from '../../../data/types/ScreenProps';
import Card from '../../../screens/common/compoonent/Card';

interface Props extends PollQuestionsProps, NavigationProps {}

export default function QuestionListComponent(props: Props) {

    const [searchedQuestions, setSearchedQuestion] = useState<PollQuestion[] | undefined>();

    const goToQuestionDetailsScreen = (questionUrl: string) => props.navigation.navigate("QuestionDetailsScreen", { questionUrl })

    const renderFlatListItem = useCallback(({ item }: {item: PollQuestion}): any => {
        return <Card title={item.question} action={() => goToQuestionDetailsScreen(item.url)} description={item.published_at.split('T')[0]} />;
    }, props.pollQuestions);

    const inset = useSafeArea();

    return (
        <View style={[Styles.matchParent, {paddingBottom: inset.bottom}]} >
            <Appbar title="Poll Questions" enableSearch searchCallback={setSearchedQuestion} searchData={props.pollQuestions} />
            <FlatList 
                data={searchedQuestions || props.pollQuestions}
                renderItem={renderFlatListItem}
                keyExtractor={(item) => item.url}
                style={styles.container}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eeeeee'
    }
})