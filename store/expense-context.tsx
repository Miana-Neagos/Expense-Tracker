import { createContext, useReducer } from "react";
import { Expense } from "../types.ts/expenseDataTypes";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

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
  addExpense: (expense) => {
    console.log("add expense");
  },
  updateExpense: (id, data) => {
    console.log("update expense");
  },
  deleteExpense: (expense) => {
    console.log("delete expense");
  },
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
    case "DELETE":
      console.log("delete");
      return state.filter(expense => expense.id !== action.payload)
    default:
      return state;
  }
}

export default function ExpenseContextProvider({ children }: {children: React.ReactNode}) {
  const [expenseState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData: Expense) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const updateExpense = (id: string, updatedData: Expense) => {
    dispatch({ type: "UPDATE", payload: {id: id, data: updatedData} });
  };
  const deleteExpense = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: expenseState,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
