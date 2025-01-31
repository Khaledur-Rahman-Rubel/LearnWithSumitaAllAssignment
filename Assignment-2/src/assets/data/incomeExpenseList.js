export const expenseCategories = [
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];
export const incomeCategories = ["Salary", "Outsourcing", "Bond", "Dividend"];

export const defaultExpenseTask = [
  {
    id: crypto.randomUUID(),
    category: "Education",
    amount: "12000",
    date: "2025-10-10",
  },
  {
    id: crypto.randomUUID(),
    category: "Food",
    amount: "120000",
    date: "2025-10-10",
  },
];

export const defaultIncomeTask = [
  {
    id: crypto.randomUUID(),
    category: "Salary",
    amount: "1100000",
    date: "2020-10-10",
  },
  {
    id: crypto.randomUUID(),
    category: "Outsourcing",
    amount: "11000",
    date: "2020-10-10",
  },
];
