import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View, Text, Pressable, Button } from "react-native";
import IconButton from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import { ExpenseContext } from "../store/expense-context";

export default function ManageExpense() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const isEditing = !!id;
  const expensesContext = useContext(ExpenseContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  const deleteExpenseHandler = (id : string) => {
    expensesContext.deleteExpense(id);
    router.back();
  };

  const cancelHandler = () => {
    // console.log("cancel pressed");
    router.back();
  };

  const confirmHandler = () => {
    // console.log("confirm is pressed");
    router.back();
  };

  return (
    <View style={styles.container}>
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
            onPress={deleteExpenseHandler}
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
    minWidth: '30%',
  },
  deleteButton: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: globalStyles.colors.accent500,
    alignItems: "center",
  },
});
