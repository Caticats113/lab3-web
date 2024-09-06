interface Expense {
  expenseName: string,
  amount: number,
  category: string,
  date: string,
}

const Screens: string[] = [
  "setBudget",
  "main",
  "addExpense",
  "editExpense"
]

export { Screens }
export type { Expense }
