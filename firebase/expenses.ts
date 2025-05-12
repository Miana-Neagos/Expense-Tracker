import {ref, get, child, push, remove, update} from "firebase/database";
import { db } from "./firebase-config";
import { Expense } from "../types.ts/expenseDataTypes";

export const fetchExpenses = async ():Promise<Expense[]> => {
    const response = await get(child(ref(db), 'expense'));
    if (!response.exists()) {
        console.log("No data available")
        throw new Error("No data available");
    };

    console.log({response});
    
    const responseData = response.val();
    console.log({responseData});

    const expenses:Expense[] = Object.entries(responseData).map(([id, entry]: [string, any]) => ({
        id,
        date: new Date(entry.date),
        amount: entry.amount,
        description: entry.description,
    }));

    return expenses;
    
}