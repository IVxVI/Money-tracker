import React, { useState } from "react";
import './Info.scss';
import classNames from "classnames";

type Props = {
  isEditing: boolean,
  setIsEditing: (value: React.SetStateAction<boolean>) => void,
  mainAmount: string,
  handleEdit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  setMainAmount: (value: React.SetStateAction<string>) => void,
  userAmount: number,
  incomesStorage: number,
  expencesStorage: number,
}

export const Info: React.FC<Props> = ({
  isEditing,
  setIsEditing,
  mainAmount,
  handleEdit,
  setMainAmount,
  userAmount,
  incomesStorage,
  expencesStorage,
}) => {
  const [shownAmounts, setShownAmounts] = useState(false);
  const handleVisibility = () => {
    setShownAmounts(!shownAmounts)
  }

  return (
    <>
      {!isEditing ? (
        <div className="info__block">
          <h2
            className="info__header"
            onDoubleClick={() => setIsEditing(true)}
          >
            Money left: <br />
            <div className='info__input-wrapper'> {mainAmount} </div>
          </h2>
        </div>
        ) : (
          <div className="info__block">
            <h2
              className="info__header"
            >
              Money left:
              <div className='info__input-wrapper'>
                <input
                  type="number"
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={handleEdit}
                  className="info__input"
                  value={mainAmount}
                  onChange={(event) => setMainAmount(event.target.value)}
                  autoFocus
                  title="Your input has to be numeric"
                />
              </div>
            </h2>
          </div>
        )
      }

      <div className="info__block">
        <progress
          className={classNames('progress',
            {'is-danger': +mainAmount < +userAmount / 3,
              'is-success':  +mainAmount > +userAmount / 3}
          )}
          value={mainAmount}
          max={userAmount}
        >
        </progress>

        <button 
          className="button"
          onClick={handleVisibility}
        >
          show amounts
        </button>
      </div>

      

      <div className={
        classNames( 'info__block', 'info__block-amounts',
          {'is-hidden': shownAmounts}
        )
      }>
        <h2
          className="info__header"
        >
          Totally spent:
          {expencesStorage}
        </h2>
        <h2
          className="info__header"
        >
          Totally earned:
          {incomesStorage}
        </h2>
      </div>
    </>
  )
}