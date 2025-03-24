import { View, StyleSheet, Text } from "react-native";
import CustomInput from "./CustomInput";
import { globalStyles } from "../../constants/styles";
import { useFormAtom, useExpenseAtom, formErrorsAtom } from "../../store/jotai";
import CustomButton from "../UI/CustomButton";
import { Expense } from "../../types.ts/expenseDataTypes";
import { useEffect } from "react";
import { validateExpenseInputs } from "../../input-validation/validation-schema";
import { useAtom } from "jotai";

type ExpenseProps = {
  onCancel: () => void;
  editingLabel?: boolean;
  onsubmit: (expensedata: Omit<Expense, "id">) => void;
  existingExpense?: Expense;
};

export const ExpenseForm = ({onCancel, editingLabel, onsubmit, existingExpense}: ExpenseProps) => {
  const { newFormData, updateForm, resetForm } = useFormAtom();
  const [formErrors, setFormErrors] = useAtom(formErrorsAtom);

  useEffect(() => {
    updateForm("amount", existingExpense?.amount.toString() || '');
    updateForm("date", existingExpense?.date.toISOString().slice(0,10) || '');
    updateForm("description", existingExpense?.description || '')
  }, [existingExpense])

  const handleSubmit = () => {

    const validationResults = validateExpenseInputs(newFormData);
    console.log("Validation Results Errors: ", validationResults.errors);
    

    if (!validationResults.isValid) {
      // console.error("Validation errors:", validationResults.errors);
      setFormErrors({
        amount: validationResults.errors.amount || '',
        date: validationResults.errors.date || '',
        description: validationResults.errors.description || '',
      });
      return;
    }

    const formattedExpense = {
      amount: validationResults.data?.amount || 0,
      date: new Date(validationResults.data?.date || Date.now()),
      description: validationResults.data?.description || '',
    };
    console.log("Formatted Expense: ", formattedExpense);

    
    onsubmit(formattedExpense);
    setFormErrors({amount: '', date: '', description: ''});
    resetForm();
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your new expense:</Text>
      <View style={styles.dateAmountContainer}>
        <CustomInput
          label="Amount"
          errorText={formErrors.amount}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (input) => updateForm("amount", input),
            value: newFormData.amount,
          }}
          style={styles.rowInput}
        />
        <CustomInput
          label="Date"
          errorText={formErrors.date}
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
        errorText={formErrors.description}
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
    alignItems: "center",
    gap: 20
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
