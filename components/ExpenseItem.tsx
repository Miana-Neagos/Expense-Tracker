import { Pressable, View, Text, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
import { globalStyles, GlobalStyles } from "../constants/styles";

type ExpenseItemProp = {
    expense: Expense;
}
export default function ExpensesItem({expense} : ExpenseItemProp) {
    return (
        <Pressable>
            <View style={styles.container}>
                <View>
                    <Text style={[globalStyles.textBold, styles.description, styles.itemText]}>{expense.description}</Text>
                    <Text style={[globalStyles.textBold, styles.itemText, styles.dateText]}>{expense.date.toDateString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[globalStyles.textBold, styles.itemText, styles.amount]}>{expense.amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 4,
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
    },
    itemText: {
        color: GlobalStyles.colors.primary100,
        padding: 3,
    },
    dateText: {
        fontSize: 12,
    },
    amountContainer: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
        elevation: 4,
        width: '23%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
       fontSize: 16, 
       color: GlobalStyles.colors.primary400,
    }
})

