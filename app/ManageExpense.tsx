import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ManageExpense() {
  const router = useRouter();
  return (
    <View>
      <Text>This is manage expense</Text>
      <Pressable onPress={() => router.navigate("/")}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({});


