import { View, StyleSheet, Text } from "react-native";
import CustomInput from "./CustomInput";
import { globalStyles } from "../../constants/styles";
import { useFormAtom } from "../../store/jotai";

// type ExpenseFormProp = {
//   isEditing: boolean;
// };

export const ExpenseForm = () => {
  const {formData, updateForm} = useFormAtom();
  console.log('Expense FORM: ', formData);
  
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your new expense:</Text>
      <View style={styles.dateAmountContainer}>
        <CustomInput
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (input) => updateForm('amount', input),
            value: formData.amount
          }}
          style={styles.rowInput}
        />
        <CustomInput
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "number-pad",
            onChangeText: (input) => updateForm('date', input),
            value: formData.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <CustomInput
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: (input) => updateForm('description', input),
          value: formData.description,
        }}
      />
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
});
