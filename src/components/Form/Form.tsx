import React from "react";
import './Form.scss';
import '../../styles/button.scss';

type Props = {
  handleExpences: (event: React.FormEvent) => void,
  handleIncomes: (event: React.FormEvent) => void,
  itemTitle: string,
  setItemTitle: (value: React.SetStateAction<string>) => void,
  itemAmount: string,
  setItemAmount: (value: React.SetStateAction<string>) => void,
}

export const Form: React.FC<Props> = ({
  handleExpences: handleExpences,
  handleIncomes: handleIncomes,
  itemTitle,
  setItemTitle,
  itemAmount,
  setItemAmount,
}) => {
  return (
    <form
      className="form"
    >
      <div className="field">
        <label
          className="label"
          htmlFor="title-input"
        >
          Add title here
        </label>
        <input
          className="form__input input"
          type="text"
          id="title-input"
          value={itemTitle}
          onChange={(event) => setItemTitle(event.target.value)}
        />
      </div>
      <div className="field">
        <label
          htmlFor="amount-input"
          className='label'
        >
          Add amount here
        </label>
        <input
          className='form__input input'
          type="number"
          id="amount-input"
          value={itemAmount}
          onChange={(event) => setItemAmount(event.target.value)}
        />
      </div>
      <div className="wrapper">
        <div className="field">
          <button
            className="button"
            onClick={handleExpences}
          >
            Add expence
          </button>
        </div>
        <div className="field">
          <button
            className="button"
            onClick={handleIncomes}
          >
            Add income
          </button>
        </div>
      </div>
    </form>
  )
}