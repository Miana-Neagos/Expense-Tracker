import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { Expense } from "../types.ts/expenseDataTypes";

type ExpensesOutputProps = {
    expenses: Expense[],
    expensesPeriod: string
}

export default function ExpensesOutput({expenses, expensesPeriod} : ExpensesOutputProps) {
    return (
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList/>
        </View>
    )
}

const styles = StyleSheet.create({

})