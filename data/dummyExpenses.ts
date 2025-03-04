import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { Expense } from "../types.ts/expenseDataTypes";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: uuidv4(),
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-03-04"),
  },
  {
    id: uuidv4(),
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-03-05"),
  },
  {
    id: uuidv4(),
    description: "Banana & Strawberry",
    amount: 5.99,
    date: new Date("2025-03-03"),
  },
  {
    id: uuidv4(),
    description: "2 Bootles of Martini",
    amount: 14.99,
    date: new Date("2025-02-04"),
  },
  {
    id: uuidv4(),
    description: "Cookies",
    amount: 18.59,
    date: new Date("2025-02-18"),
  },
  {
    id: uuidv4(),
    description: "Bathing Suit",
    amount: 89.29,
    date: new Date("2025-03-01"),
  },
  {
    id: uuidv4(),
    description: "Sushi & Sashimi",
    amount: 5.99,
    date: new Date("2025-03-03"),
  },
  {
    id: uuidv4(),
    description: "Pasta",
    amount: 14.99,
    date: new Date("2025-02-04"),
  },
  {
    id: uuidv4(),
    description: "Gym Memebership",
    amount: 18.59,
    date: new Date("2025-02-18"),
  },
  {
    id: uuidv4(),
    description: "Another book",
    amount: 18.59,
    date: new Date("2025-02-18"),
  },
  {
    id: uuidv4(),
    description: "Cat Food",
    amount: 18.59,
    date: new Date("2025-02-18"),
  },
  {
    id: uuidv4(),
    description: "laptop",
    amount: 18.59,
    date: new Date("2025-02-18"),
  },
];

export default DUMMY_EXPENSES;