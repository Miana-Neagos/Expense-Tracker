import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
import DUMMY_EXPENSES from "../../data/dummyExpenses";
import { useContext } from "react";
import { ExpenseContext } from "../../store/expense-context";
import { getRecentExpenses } from "../../utils/getRecentExpenses";

export default function RecentExpenses() {
    const expensesContext = useContext(ExpenseContext);
    
    const recentExpenses = getRecentExpenses(expensesContext.expenses, 7);    
    
    return (
        <View style={styles.container}>
            {/* <Link href="/_manage-expense">Go to Manage Expense</Link> */}
            {/* <Button title="Add Expense" onPress={() => router.push("/ManageExpense")} /> */}
            <ExpensesOutput expenses={recentExpenses} expensesPeriod="7 days" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
