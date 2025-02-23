import { Text, View, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";

type ExpensesSummaryProps = {
    expenses: Expense[],
    periodName: string
}


export default function ExpensesSummary({periodName, expenses} : ExpensesSummaryProps) {

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>{expensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})