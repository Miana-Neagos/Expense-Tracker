import { Expense } from "../types.ts/expenseDataTypes";

export const getRecentExpenses = (expenses: Expense[], period: number) => {
    const today = new Date();
    const xDaysAgo = new Date(today);
    xDaysAgo.setDate(today.getDate() - 7);

    return expenses
        .filter(expense => expense.date >= xDaysAgo)
        // .sort((a,b) => a.date > b.date ? -1 : 1);
        .sort((a,b) => b.date.getTime() - a.date.getTime());
}