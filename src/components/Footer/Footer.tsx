import React from "react";
import { FilterType } from "../../types/FilterType";
import './Footer.scss';
import '../../styles/button.scss';

type Props = {
  handleReset: () => void,
  setFilterType: (filterType: FilterType) => void,
  filterType: FilterType,
}

export const Footer: React.FC<Props> = ({ handleReset, setFilterType }) => {
  return (
    <footer className="footer">
      <div className="footer__buttons">
        <button
          className="button"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="button"
          onClick={() => setFilterType(FilterType.Incomes)}
        >
          Show only incomes
        </button>
        <button
          className="button"
          onClick={() => setFilterType(FilterType.Expences)}
        >
          Show only expences
        </button>
        
        <button
          className="button"
          onClick={() => setFilterType(FilterType.All)}
        >
          Show all
        </button>
      </div>
    </footer>
  )
}