import { router } from "expo-router";
import { StyleSheet, View, Text, Button } from "react-native";
export default function AllExpenses() {
    return (
        <View>
            <Text>This is All Expenses</Text>
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    )
}
const styles = StyleSheet.create({
})
