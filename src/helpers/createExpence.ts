import { ExpenceItem } from "../types/ExpenceItem";

export const createExpence = (title: string, amount: number, max: number): ExpenceItem => {
  return {
    category: 'expences',
    title,
    amount,
    max,
    createdAt: Date(),
    date: Date().toLocaleString(),
    id: Math.floor(Math.random() * 1000),
  };
}