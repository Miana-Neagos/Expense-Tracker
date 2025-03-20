import {z} from 'zod';
import { Expense } from '../types.ts/expenseDataTypes';
import errorMap from 'zod/lib/locales/en';

export const expenseSchema = z.object ({
    amount: z.coerce
    .number()
    .positive("amount must be greater than 0")
    .refine(val => val > 0, {message: 'Amount must be greater than 0'}),

    date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date format must be YYYY-MM-DD")
    .refine(val => isNaN(Date.parse(val)), {message: 'Invalid date'}),

    description: z
    .string()
    .trim().min(1, {message: `Description filed can't be empty`})
});

export const validateExpenseInputs = (data: { amount: string; date: string; description: string }) => {
    const results = expenseSchema.safeParse(data)
    if(results.success) {
        return {isValid: true, data: results.data, errors: {}}
    }
    console.log(results);

    return results;
}