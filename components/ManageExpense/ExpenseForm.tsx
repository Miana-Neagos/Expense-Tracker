import { View, StyleSheet, Text } from "react-native";
import CustomInput from "./CustomInput";
import { globalStyles } from "../../constants/styles";
import { useFormAtom } from "../../store/jotai";
import CustomButton from "../UI/CustomButton";
import { Expense } from "../../types.ts/expenseDataTypes";
import { useEffect } from "react";
import { validateExpenseInputs } from "../../input-validation/validation-schema";

type ExpenseProps = {
  onCancel: () => void;
  editingLabel?: boolean;
  onSubmit: (expensedata: Omit<Expense, "id">) => void;
  existingExpense?: Expense;
};

export const ExpenseForm = ({ onCancel, editingLabel, onSubmit,
  existingExpense,
}: ExpenseProps) => {
  const { newFormData, updateForm, resetForm } = useFormAtom();

  useEffect(() => {
    updateForm("amount", existingExpense?.amount.toString() || "", "");
    updateForm(
      "date",
      existingExpense?.date.toISOString().slice(0, 10) || "",
      ""
    );
    updateForm("description", existingExpense?.description || "", "");
  }, [existingExpense]);

  const handleSubmit = () => {
    const raw = {
      amount: newFormData.amount.value,
      date: newFormData.date.value,
      description: newFormData.description.value,
    };

    const validationResults = validateExpenseInputs(raw);

    if (!validationResults.isValid) {
      updateForm("amount", raw.amount, validationResults.errors.amount || "");
      updateForm("date", raw.date, validationResults.errors.date || "");
      updateForm(
        "description",
        raw.description,
        validationResults.errors.description || ""
      );
      return;
    }

    const formattedExpense = {
      amount: validationResults.data?.amount || 0,
      date: new Date(validationResults.data?.date || Date.now()),
      description: validationResults.data?.description || "",
    };
    console.log("Formatted Expense: ", formattedExpense);

    onSubmit(formattedExpense);
    resetForm();
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your new expense:</Text>
      <View style={styles.dateAmountContainer}>
          <CustomInput
            label="Amount"
            errorText={newFormData.amount.error}
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: (input) => updateForm("amount", input),
              value: newFormData.amount.value,
            }}
            style={styles.rowInput}
          />
          <CustomInput
            label="Date"
            errorText={newFormData.date.error}
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              keyboardType: "number-pad",
              onChangeText: (input) => updateForm("date", input),
              value: newFormData.date.value,
            }}
            style={styles.rowInput}
          />
      </View>
      <View>
        <CustomInput
          label="Description"
          errorText={newFormData.description.error}
          textInputConfig={{
            multiline: true,
            autoCorrect: false,
            onChangeText: (input) => updateForm("description", input),
            value: newFormData.description.value,
          }}
        />
      </View>
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
    gap: 5,
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  button: {
    marginTop: 10,
    minWidth: "30%",
  },
});
