import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
// import DUMMY_EXPENSES from "../../data/dummyExpenses";
import { useContext } from "react";
import { ExpenseContext } from "../../store/expense-context";
// import 'react-native-get-random-values';

export default function AllExpenses() {
    const expensesContext = useContext(ExpenseContext);
    return (
        <View style={styles.container}>
            {/* <Button title="Go Back" onPress={() => router.back()} /> */}
            <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="Total"/>
        </View>
    )
}
const styles = StyleSheet.create({
        container: {
        flex: 1,
    }
})
