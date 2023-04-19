import'./UserAmountModal.scss';
import '../../styles/button.scss';

type Props = {
  setUserAmount: (value: React.SetStateAction<number>) => void,
  onSubmit: (event: React.FormEvent) => void,
}

export const UserAmountModal: React.FC<Props> = ({ setUserAmount, onSubmit }) => {
  return (
    <div className="userform__wrapper">
      <form
        className="userform"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="userInput"
          className="userform__label"
        >
          Enter your maximum monthly income
        </label>
        <input
          className="userform__input"
          type="number"
          id="userInput"
          placeholder="0"
          onChange={(event) => setUserAmount(+event.target.value)}
        />
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  )
}