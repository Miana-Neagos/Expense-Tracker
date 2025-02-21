import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="RecentExpenses" options={{title: "Recent Expenses"}}/>
            <Tabs.Screen name="AllExpenses" options={{title: "All Expenses"}}/>
        </Tabs>
    )
}