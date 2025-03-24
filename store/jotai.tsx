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

// export const formAtom = atom({
//   amount: '',
//   date: '',
//   description: '',
// })

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

