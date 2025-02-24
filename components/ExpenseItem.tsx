import { Pressable, View, Text, StyleSheet } from "react-native";
import { Expense } from "../types.ts/expenseDataTypes";
import { globalColors, globalFont } from "../constants/styles";

type ExpenseItemProp = {
    expense: Expense;
}
export default function ExpensesItem({expense} : ExpenseItemProp) {
    return (
        <Pressable>
            <View style={styles.container}>
                <View>
                    <Text style={[globalFont.textBold, styles.description, styles.itemText]}>{expense.description}</Text>
                    <Text style={[globalFont.textBold, styles.itemText, styles.dateText]}>{expense.date.toDateString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[globalFont.textBold, styles.itemText, styles.amount]}>{expense.amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: globalColors.colors.primary500,
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
        color: globalColors.colors.primary100,
        padding: 3,
    },
    dateText: {
        fontSize: 12,
    },
    amountContainer: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: globalColors.colors.primary100,
        borderRadius: 4,
        elevation: 4,
        width: '23%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
       fontSize: 16, 
       color: globalColors.colors.primary400,
    }
})

