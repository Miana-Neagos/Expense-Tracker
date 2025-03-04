import { Text, View, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
import { globalStyles } from "../constants/styles";

type ExpensesSummaryProps = {
    expenses: Expense[],
    periodName: string
}

export default function ExpensesSummary({periodName, expenses} : ExpensesSummaryProps) {    

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)
    return (
        <View style={styles.container}>
            <Text style={[globalStyles.fonts.textBold, styles.period]}>{periodName}</Text>
            <Text style={[globalStyles.fonts.textBold, styles.sum]}>{expensesSum.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: globalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: globalStyles.colors.accent500,
    },
    period: {
        fontSize: 14,
        color: globalStyles.colors.primary400,
    },
    sum: {
        fontSize: 16,
        color: globalStyles.colors.primary500,
    }
})