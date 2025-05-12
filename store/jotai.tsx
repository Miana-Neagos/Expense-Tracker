import { atom, useAtom } from "jotai";
import { Expense } from "../types.ts/expenseDataTypes";
import DUMMY_EXPENSES from "../data/dummyExpenses";
import { fetchExpenses } from "../firebase/expenses";
import { db } from "../firebase/firebase-config";
import { push, ref } from "firebase/database";



// export const expenseAtom = atom<Expense[]>(DUMMY_EXPENSES);
export const expenseAtom = atom<Expense[]>([]);  // Initialize with an empty array, no dummy data
const EXPENSES_PATH = "expenses";

export const useExpenseAtom = () => {
    const [expenses, setExpenses] = useAtom(expenseAtom);

    const fetchDbExpenses = async () => {
      const fetchedExpenses = await fetchExpenses();
      setExpenses(fetchedExpenses);
    }

    const addExpense = (expenseData: Omit<Expense, 'id') => {
        const newExpenseData = await push(ref(db, EXPENSES_PATH), {
          ...expenseData,
          date: expenseData.date.toISOString(),
        })

        const newExpense: Expense = {
          id: newExpenseData.key!,
          ...expenseData,
        }
        setExpenses(prevExpenses => [newExpense, ...prevExpenses])
    };

    const updateExpense = (id: string, updatedData: Expense) => {
        setExpenses(prevExpenses => prevExpenses.map(expense => expense.id === id? {...expense, ...updatedData} : expense))
      };

    const deleteExpense = (id: string) => {    
        setExpenses( prevExpenses => prevExpenses.filter(expense => expense.id !== id));
      };

    return {expenses, addExpense, updateExpense, deleteExpense, fetchDbExpenses};
};


type InputFields = {
  value: string;
  error: string;
}

type FormState = {
  amount: InputFields;
  date: InputFields;
  description: InputFields; 
}

export const formAtom = atom<FormState>({
  amount: {value: "", error: ""},
  date: {value: "", error: ""},
  description: {value: "", error: ""}
})

export const useFormAtom = () => {
  const [newFormData, setFormData] = useAtom(formAtom);

  const updateForm = (key: keyof FormState, value: string, error: string = '') => {
    setFormData((prevFormData) => ({...prevFormData, [key]: {value, error}}))
  };

  const resetForm = () => {
    setFormData({
      amount: {value: "", error: ""},
      date: {value: "", error: ""},
      description: {value: "", error: ""}
    })
  }

  return {newFormData, updateForm, resetForm};
  
}

