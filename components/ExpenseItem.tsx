import { Pressable, View, Text, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
import { globalStyles } from "../constants/styles";
import { getFormattedDate } from "../utils/dateFormat";
import { router } from "expo-router";

type ExpenseItemProp = {
  expense?: Expense;
};
export default function ExpensesItem({ expense }: ExpenseItemProp) {  
  const pressHandler = () => {
    router.push(`/ManageExpense?id=${expense?.id}`);
  };

  return (
    <View style={styles.pressableWrapper}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: globalStyles.colors.gray700 }}
      >
        <View style={styles.container}>
          <View>
            <Text
              style={[
                globalStyles.fonts.textBold,
                styles.itemText,
                styles.description,
              ]}
            >
              {expense.description}
            </Text>
            <Text
              style={[
                globalStyles.fonts.textBold,
                styles.itemText,
                styles.dateText,
              ]}
            >
              {getFormattedDate(expense.date)}
            </Text>
          </View>
          <View style={styles.amountContainer}>
            <Text
              style={[
                globalStyles.fonts.textBold,
                styles.itemText,
                styles.amount,
              ]}
            >
              {expense.amount.toFixed(2)}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableWrapper: {
    overflow: "hidden",
    marginBottom: 8,
    borderRadius: 12,
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: globalStyles.colors.primary10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  description: {
    fontSize: 16,
  },
  itemText: {
    color: globalStyles.colors.primary400,
    padding: 3,
  },
  dateText: {
    fontSize: 12,
  },
  amountContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: globalStyles.colors.primary50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: globalStyles.colors.accent500,
    minWidth: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    fontSize: 16,
    color: globalStyles.colors.primary400,
  },
});
