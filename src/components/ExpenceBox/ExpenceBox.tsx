import React from "react";
import { ExpenceItem } from "../../types/ExpenceItem";
import { IncomeItem } from "../../types/IncomeItem";
import './ExpenceBox.scss'
import '../../styles/button.scss';

type Props = {
  item: ExpenceItem | IncomeItem,
  onExpencesDelete: (index: number) => void,
  onIncomesDelete: (index: number) => void,
}

export const ExpenceBox: React.FC<Props> = ({ item, onExpencesDelete, onIncomesDelete }) => {
  const isExpense = 'category' in item && item.category === 'expences';

  return (
    isExpense ? (
      <div className="item item__expences">
        <h2 className="item__subheader item__subheader--expences">{item.category}</h2>
        <div className="">
          <div className="item__header">Title: {item.title}</div>
        </div>
        <div className="item__content">
          <div className="item__content--date">Created at: {item.createdAt}</div>
          <div className="item__content--amount">{item.amount} / {item.max}</div>
        </div>
        <footer className="item__footer">
          <button className="button">Edit</button>
          <button className="button" onClick={() => onExpencesDelete(item.id)}>Delete</button>
        </footer>
      </div>
    ) : (
      <div className="item item__incomes">
        <h2 className="item__subheader item__subheader--incomes">{item.category}</h2>
        <div className="">
          <div className="item__header">Title: {item.title}</div>
        </div>
        <div className="item__content">
          <div className="item__content--date">Created at: {item.createdAt}</div>
          <div className="item__content--amount">{item.amount}</div>
        </div>
        <footer className="item__footer">
          <button className="button">Edit</button>
          <button className="button" onClick={() => onIncomesDelete(item.id)}>Delete</button>
        </footer>
      </div>
    )
  )
}