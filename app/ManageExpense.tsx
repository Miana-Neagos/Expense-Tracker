import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { v4 as uuidv4 } from "uuid";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";
import { Expense } from "../types.ts/expenseDataTypes";
import { useExpenseAtom, useFormAtom } from "../store/jotai";
import { ExpenseForm } from "../components/ManageExpense/ExpenseForm";
import { useAtom } from "jotai";

export default function ManageExpense() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const isEditing = !!id;
  const { expenses, addExpense, updateExpense, deleteExpense } = useExpenseAtom();
  const { resetForm } = useFormAtom();
  // const [formErrors, setFormErrors] = useAtom(formErrorsAtom);

  const targetedExpense = expenses.find((expense) => expense.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
    if (!isEditing) {
      resetForm();
      // setFormErrors({ amount: "", date: "", description: "" })
      }
  }, [isEditing, navigation]);

  const deleteExpenseHandler = (id: string) => {
    deleteExpense(id);
    router.back();
  };

  const cancelHandler = () => {
    resetForm();
    // setFormErrors({ amount: "", date: "", description: "" });
    router.back();
  };

  const confirmHandler = (expensedata: Omit<Expense, "id">) => {
    isEditing
      ? updateExpense(id as string, expensedata as Expense)
      : addExpense({
          id: uuidv4(),
          description: expensedata.description,
          amount: expensedata.amount,
          date: expensedata.date,
        }),
      resetForm();
      // setFormErrors({ amount: "", date: "", description: "" });
    router.back();
  };

  return (
    <View style={styles.container}>
        <ExpenseForm
          onCancel={cancelHandler}
          editingLabel={isEditing}
          onsubmit={confirmHandler}
          existingExpense={targetedExpense}
        />
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
