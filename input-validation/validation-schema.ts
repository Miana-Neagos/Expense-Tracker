import { z } from "zod";

export const expenseSchema = z.object({
  amount: z.coerce
    .number()
    .positive("Amount must be greater than 0")
    .refine((val) => val > 0, { message: "Amount must be greater than 0" }),

  date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date format must be YYYY-MM-DD")
    .refine((val) => val.length > 0, { message: "Date field can't be empty" })
    .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),

  description: z
    .string()
    .trim()
    .min(1, { message: `Description field can't be empty` }),
});

export const validateExpenseInputs = (data: {
  amount: string;
  date: string;
  description: string;
}) => {
  const results = expenseSchema.safeParse(data);

  if (results.success) {
    return { isValid: true, data: results.data, errors: {} };
  }

  const formattedErrors = results.error.format();
  console.log({
    errors: {
      amount: formattedErrors.amount?._errors[0],
      date: formattedErrors.date?._errors[0],
      description: formattedErrors.description?._errors[0],
    },
  });

  return {
    isValid: false,
    date: null,
    errors: {
      amount: formattedErrors.amount?._errors[0],
      date: formattedErrors.date?._errors[0],
      description: formattedErrors.description?._errors[0],
    },
  };
};
