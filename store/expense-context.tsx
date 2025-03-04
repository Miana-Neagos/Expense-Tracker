import { createContext, useReducer } from "react";
import { Expense } from "../types.ts/expenseDataTypes";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import DUMMY_EXPENSES from "../data/dummyExpenses";

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expenseData: Expense) => void;
  updateExpense: (id: string, data: Expense) => void;
  deleteExpense: (id: string) => void;
};

type ExpenseAction =
  | { type: "ADD"; payload: Expense }
  | { type: "UPDATE"; payload: {id: string; data: Expense} }
  | { type: "DELETE"; payload: string };

export const ExpenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: (expense) => {},
  updateExpense: (id, data) => {},
  deleteExpense: (expense) => {},
});

function expensesReducer(state: Expense[], action: ExpenseAction): Expense[] {
  switch (action?.type) {
    case "ADD":
      const id = uuidv4();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      console.log("update");
      return state.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data }
          : expense
      );
      // const updatedExpenseIndex = state.findIndex(expense => expense.id === action.payload.id);
      // console.log({updatedExpenseIndex});
      // const updatedItem = state[updatedExpenseIndex];
      // const updatedItemCopy = {...updatedItem, ...action.payload.data};
      // const updatedExpensesState = [...state];
      // updatedExpensesState[updatedExpenseIndex] = updatedItemCopy;
      // return updatedExpensesState;

    case "DELETE":
      // console.log("delete");
      return state.filter(expense => expense.id !== action.payload)
    default:
      return state;
  }
}

export default function ExpenseContextProvider({ children }: {children: React.ReactNode}) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData: Expense) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const updateExpense = (id: string, updatedData: Expense) => {
    dispatch({ type: "UPDATE", payload: {id: id, data: updatedData} });
  };
  const deleteExpense = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {        
    expenses: expenseState,
    addExpense,
    updateExpense,
    deleteExpense,}

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}
