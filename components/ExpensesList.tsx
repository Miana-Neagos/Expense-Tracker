import { FlatList, View, Text, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
import ExpensesItem from "./ExpenseItem";
type ExpensesListProps = {
  expenses: Expense[];
};

export default function ExpensesList({ expenses }: ExpensesListProps) {
  //   console.log({ expenses });

  function renderExpenseItem({ item }: { item: Expense }) {
    return (
      <ExpensesItem expense={item}/>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
