import { FlatList, View, StyleSheet, Text } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
import ExpensesItem from "./ExpenseItem";
import { globalStyles } from "../constants/styles";
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
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
          <Text style={[globalStyles.fonts.textBold, { color: globalStyles.colors.gray700}]}>No expenses added.</Text>
        </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 18,
    padding: 18,
  },
});
