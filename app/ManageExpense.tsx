import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ManageExpense() {
  const navigation = useNavigation();
  const {id} = useLocalSearchParams();
  console.log(id);
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing? "Edit Expense" : "Add Expense"
    })
  },[isEditing, navigation])
  

  return (
    <View>
      <Text>{isEditing ? "Edit an Expense" : "Adding a New Expense"}</Text>
      {/* <Pressable onPress={() => router.navigate("/")}>
        <Text>Go Back</Text>
      </Pressable> */}
    </View>
  );
};
const styles = StyleSheet.create({});


