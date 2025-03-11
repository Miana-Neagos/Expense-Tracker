import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
import ExpensesOutput from "../../components/ExpensesOutput";
// import DUMMY_EXPENSES from "../../data/dummyExpenses";
import { useContext } from "react";
import { ExpenseContext } from "../../store/expense-context";
import { useExpenseAtom } from "../../store/jotai";
// import 'react-native-get-random-values';

export default function AllExpenses() {
  // const expensesContext = useContext(ExpenseContext);
  // const sortedExpenses = expensesContext.expenses.sort(
  //   (a, b) => b.date.getTime() - a.date.getTime()
  // );
  const {expenses} = useExpenseAtom();
  const sortedExpenses = expenses.sort(
    (a, b) => b.date.getTime() - a.date.getTime());
    
  return (
    <View style={styles.container}>
      {/* <Button title="Go Back" onPress={() => router.back()} /> */}
      <ExpensesOutput expenses={sortedExpenses} expensesPeriod="Total" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
