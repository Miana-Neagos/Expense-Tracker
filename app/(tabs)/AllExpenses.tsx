import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
import { DUMMY_EXPENSES } from "../../data/dummyExpenses";

export default function AllExpenses() {
    return (
        <View>
            <Text>This is All Expenses</Text>
            <Button title="Go Back" onPress={() => router.back()} />
            <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="all"/>
        </View>
    )
}
const styles = StyleSheet.create({
})
