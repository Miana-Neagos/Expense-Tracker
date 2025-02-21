import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";

export default function RecentExpenses() {
    return (
        <View>
            <Text>This is Recent Expense</Text>
            {/* <Link href="/_manage-expense">Go to Manage Expense</Link> */}
            <Button title="Add Expense" onPress={() => router.push("/ManageExpense")} />
        </View>
    )
}
const styles = StyleSheet.create({
})
