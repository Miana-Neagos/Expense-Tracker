import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
import DUMMY_EXPENSES from "../../data/dummyExpenses";
// import 'react-native-get-random-values';

export default function RecentExpenses() {
    return (
        <View style={styles.container}>
            {/* <Link href="/_manage-expense">Go to Manage Expense</Link> */}
            {/* <Button title="Add Expense" onPress={() => router.push("/ManageExpense")} /> */}
            <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="7 days" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
