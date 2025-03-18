import { atom, useAtom } from "jotai";
import { Expense } from "../types.ts/expenseDataTypes";
import DUMMY_EXPENSES from "../data/dummyExpenses";

export const expenseAtom = atom<Expense[]>(DUMMY_EXPENSES);

export const useExpenseAtom = () => {
    const [expenses, setExpenses] = useAtom(expenseAtom);

    const addExpense = (expenseData: Expense) => {
        const newExpense = { ...expenseData}
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

export const formAtom = atom({
  amount: '',
  date: '',
  description: '',
})

export const useFormAtom = () => {
  const [newFormData, setFormData] = useAtom(formAtom);

  const updateForm = (key: 'amount' | 'date' | 'description', value: string) => {
    setFormData((prevFormData) => ({...prevFormData, [key]:value}))
  };

  const resetForm = () => {
    setFormData({amount: '', date: '', description: ''})
  }

  return {newFormData, updateForm, resetForm};
}