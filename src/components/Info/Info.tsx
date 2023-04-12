import classNames from "classnames"
import React from "react"

type Props = {
  isEditing: boolean,
  setIsEditing: (value: React.SetStateAction<boolean>) => void,
  mainAmount: string,
  handleEdit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  setMainAmount: (value: React.SetStateAction<string>) => void,
  userAmount: number,
}

export const Info: React.FC<Props> = ({
  isEditing,
  setIsEditing,
  mainAmount,
  handleEdit,
  setMainAmount,
  userAmount,
}) => {
  return (
    <div className="App__main-block">
      {!isEditing ? (
        <h1
          className="App__header"
          onDoubleClick={() => setIsEditing(true)}
        >
          Money left: <br />
          <div className='App__input-wrapper'> {mainAmount} </div>
        </h1>
        ) : (
          <h1
            className="App__header"
          >
            Money left:
            <div className='App__input-wrapper'>
              <input
                type="number"
                onBlur={() => setIsEditing(false)}
                onKeyDown={handleEdit}
                className="App__input"
                value={mainAmount}
                onChange={(event) => setMainAmount(event.target.value)}
                autoFocus
                title="Your input has to be numeric"
              />
            </div>
          </h1>
        )
      }

      <progress className={classNames('progress',
        {'is-danger': +mainAmount < +userAmount / 3,
          'is-success':  +mainAmount > +userAmount / 3}
      )}
        value={mainAmount} 
        max={userAmount}
      ></progress>
    </div>
  )
}