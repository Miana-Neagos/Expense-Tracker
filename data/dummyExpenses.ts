import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { Expense } from "../types.ts/expenseDataTypes";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: uuidv4(),
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-19"),
  },
  {
    id: uuidv4(),
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2024-01-05"),
  },
  {
    id: uuidv4(),
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2024-12-01"),
  },
  {
    id: uuidv4(),
    description: "A book",
    amount: 14.99,
    date: new Date("2024-02-19"),
  },
  {
    id: uuidv4(),
    description: "Another book",
    amount: 18.59,
    date: new Date("2024-02-18"),
  },
  {
    id: uuidv4(),
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2024-01-05"),
  },
  {
    id: uuidv4(),
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2024-12-01"),
  },
  {
    id: uuidv4(),
    description: "A book",
    amount: 14.99,
    date: new Date("2024-02-19"),
  },
  {
    id: uuidv4(),
    description: "Another book",
    amount: 18.59,
    date: new Date("2024-02-18"),
  },
  {
    id: uuidv4(),
    description: "Another book",
    amount: 18.59,
    date: new Date("2024-02-18"),
  },
  {
    id: uuidv4(),
    description: "Another book",
    amount: 18.59,
    date: new Date("2024-02-18"),
  },
  {
    id: uuidv4(),
    description: "Another book",
    amount: 18.59,
    date: new Date("2024-02-18"),
  },
];

export default DUMMY_EXPENSES;