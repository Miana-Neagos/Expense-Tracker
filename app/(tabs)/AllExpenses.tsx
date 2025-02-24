import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
import DUMMY_EXPENSES from "../../data/dummyExpenses";
// import 'react-native-get-random-values';

export default function AllExpenses() {
    return (
        <View>
            <Text>This is All Expenses</Text>
            <Button title="Go Back" onPress={() => router.back()} />
            <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total"/>
        </View>
    )
}
const styles = StyleSheet.create({
})
