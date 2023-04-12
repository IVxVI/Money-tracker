import { IncomeItem } from "../types/IncomeItem";

export const createIncome = (title: string, amount: number): IncomeItem => {
  return {
    category: 'incomes',
    title,
    amount,
    createdAt: Date(),
    date: Date().toLocaleString(),
    id: Math.floor(Math.random() * 1000),
  };
}