import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { Expense } from "../types.ts/expenseDataTypes";
import { GlobalStyles } from "../constants/styles";

type ExpensesOutputProps = {
    expenses: Expense[],
    expensesPeriod: string
}

export default function ExpensesOutput({expenses, expensesPeriod} : ExpensesOutputProps) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 6,
        gap: 15,
    }
})