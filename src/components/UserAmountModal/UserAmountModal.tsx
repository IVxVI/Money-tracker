import'./UserAmountModal.scss';
import '../../styles/button.scss';

type Props = {
  setUserAmount: (value: React.SetStateAction<number>) => void,
  setIsSubmited: (value: React.SetStateAction<boolean>) => void,
}

export const UserAmountModal: React.FC<Props> = ({ setUserAmount, setIsSubmited }) => {
  const handleSubmit = (event: any) => {
    const value = +event.currentTarget.elements.userInput.value;
    setUserAmount(value);    
    setIsSubmited(true);
  }

  return (
    <div className="userform__wrapper">
      <form
        className="userform"
        onSubmit={handleSubmit}
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