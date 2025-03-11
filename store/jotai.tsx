import { atom, useAtom } from "jotai";
import { Expense } from "../types.ts/expenseDataTypes";
import DUMMY_EXPENSES from "../data/dummyExpenses";
import { v4 as uuidv4 } from "uuid";

export const expenseAtom = atom<Expense[]>(DUMMY_EXPENSES);

export const useExpenseAtom = () => {
    const [expenses, setExpenses] = useAtom(expenseAtom);

    const addExpense = (expenseData: Expense) => {
        const newExpense = { ...expenseData, id: uuidv4()}
        setExpenses(prevExpenses => [newExpense, ...prevExpenses])
    };

    const updateExpense = (id: string, updatedData: Expense) => {
        setExpenses(prevExpenses => prevExpenses.map(expense => expense.id === id? {...expense, ...updatedData} : expense))
      };

    const deleteExpense = (id: string) => {    
        setExpenses( prevExpenses => prevExpenses.filter(expense => expense.id !== id));
      };

    return {expenses, addExpense, updateExpense, deleteExpense};
};