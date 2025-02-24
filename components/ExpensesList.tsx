import { FlatList, View, Text, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
type ExpensesListProps = {
  expenses: Expense[];
};

export default function ExpensesList({ expenses }: ExpensesListProps) {
//   console.log({ expenses });

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={({item}) => (
            <View style={styles.container}>
                <View style={styles.expenseItem}>
                    <Text style={styles.itemText}>{item.description}</Text>
                </View>
                <View>
                    <Text style={styles.itemText}>{item.amount}</Text>
                </View>
                <View>
                    <Text style={styles.itemText}>{item.date.toDateString()}</Text>
                </View>
            </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        // gap: 10,
    },
    // expenseItem: {
    //     padding: 3,
    // },
    itemText: {
        textAlign: 'left',
    }
})
