import { View, StyleSheet, Text } from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import CustomInput from "./CustomInput";
import { globalStyles } from "../../constants/styles";
import { useFormAtom, useExpenseAtom } from "../../store/jotai";
import CustomButton from "../UI/CustomButton";
import { v4 as uuidv4 } from "uuid";
import { Expense } from "../../types.ts/expenseDataTypes";
import { useEffect } from "react";
import { getFormattedDate } from "../../utils/dateFormat";

type ExpenseProps = {
  onCancel: () => void;
  editingLabel?: boolean;
  onsubmit: (expensedata: Omit<Expense, "id">) => void;
  existingExpense?: Expense;
};

export const ExpenseForm = ({onCancel, editingLabel, onsubmit, existingExpense}: ExpenseProps) => {
  const { newFormData, updateForm, resetForm } = useFormAtom();

  useEffect(() => {
    updateForm("amount", existingExpense?.amount.toString() || '');
    updateForm("date", existingExpense?.date.toISOString().slice(0,10) || '');
    updateForm("description", existingExpense?.description || '')
  }, [existingExpense])

  const handleSubmit = () => {
    const formattedExpense = {
      amount: +(newFormData.amount) || 0,
      date: new Date(newFormData.date),
      description: newFormData.description,
    };
    console.log("Formatted Expense: ", formattedExpense);
    
    onsubmit(formattedExpense);
    resetForm();
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your new expense:</Text>
      <View style={styles.dateAmountContainer}>
        <CustomInput
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (input) => updateForm("amount", input),
            value: newFormData.amount,
          }}
          style={styles.rowInput}
        />
        <CustomInput
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "number-pad",
            onChangeText: (input) => updateForm("date", input),
            value: newFormData.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <CustomInput
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: (input) => updateForm("description", input),
          value: newFormData.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </CustomButton>
        <CustomButton onPress={handleSubmit} style={styles.button}>
          {editingLabel ? "Update" : "Add"}
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 35,
    marginBottom: 35,
  },
  title: {
    marginHorizontal: 20,
    fontFamily: "Roboto_700Bold",
    color: globalStyles.colors.primary50,
    fontSize: 18,
  },
  dateAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
});
