import { Redirect } from "expo-router";
import { useEffect } from "react";
import 'react-native-get-random-values';
import { fetchExpenses } from "../firebase/expenses";

export default function App() {

  // useEffect(() => {
  //   const testFetch = async () => {
  //     try {
  //       const data = await fetchExpenses();
  //       console.log("Fetched data:", data);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //     }
  //   }
  //   testFetch();
  // }, [])
  return <Redirect href="/(tabs)/AllExpenses" />;
}