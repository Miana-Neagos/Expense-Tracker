import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import ExpensesItem from "../components/ExpenseItem";
import { Expense } from "../types.ts/expenseDataTypes";
import { useExpenseAtom, useFormAtom } from "../store/jotai";
import { ExpenseForm } from "../components/ManageExpense/ExpenseForm";
import { v4 as uuidv4 } from "uuid";

export default function ManageExpense() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const isEditing = !!id;
  const { expenses, addExpense, updateExpense, deleteExpense } =
    useExpenseAtom();
  const { formData, resetForm } = useFormAtom();

  console.log("Manage Expense: ", formData);

  const targetedExpense = expenses.find((expense) => expense.id === id);
  const formattedExpense = {
    id: isEditing ? (id as string) : uuidv4(),
    amount: parseFloat(formData.amount) || 0,
    date: new Date(formData.date),
    description: formData.description,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
    if(!isEditing) resetForm();
  }, [isEditing, navigation]);

  const deleteExpenseHandler = (id: string) => {
    deleteExpense(id);
    router.back();
  };

  const cancelHandler = () => {
    resetForm();
    router.back();
  };

  const confirmHandler = () => {
    isEditing
      ? updateExpense(id as string, targetedExpense as Expense)
      : addExpense(formattedExpense),resetForm();
    router.back();
  };

  return (
    <View style={styles.container}>
      {!isEditing && <ExpenseForm /> }
      {targetedExpense && <ExpensesItem expense={targetedExpense} />}
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      <View style={styles.deleteButton}>
        {isEditing && (
          <IconButton
            icon="trash"
            color={globalStyles.colors.accent500}
            size={28}
            onPress={() => deleteExpenseHandler(id as string)}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: globalStyles.colors.primary200,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    marginTop: 20,
    minWidth: "30%",
  },
  deleteButton: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: globalStyles.colors.accent500,
    alignItems: "center",
  },
});
