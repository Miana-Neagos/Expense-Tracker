import { View, StyleSheet, Text } from "react-native";
import CustomInput from "./CustomInput";
import { globalStyles } from "../../constants/styles";

export const ExpenseForm = () => {
  const amountInputHandler = (input: string) => {
    console.log("Amount input handler", input);
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your new expense:</Text>
      <View style={styles.dateAmountContainer}>
        <CustomInput
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountInputHandler,
          }}
          style={styles.rowInput}
        />
        <CustomInput
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "number-pad",
            onChangeText: (input) => {
              console.log("Date input handler", input);
            },
          }}
          style={styles.rowInput}
        />
      </View>
      <CustomInput
        label="Description"
        textInputConfig={{
          // placeholder: 'Enter description',
          multiline: true,
          autoCorrect: false,
          onChangeText: (input) => {
            console.log("Description input handler", input);
          },
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
