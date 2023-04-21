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
    <footer className="footer__buttons">
      <button
        className="button"
        onClick={handleReset}
      >
        <span>Reset</span>
      </button>
      <button
        className="button"
        onClick={() => setFilterType(FilterType.Incomes)}
      >
        <span>Show incomes</span>
      </button>
      <button
        className="button"
        onClick={() => setFilterType(FilterType.Expences)}
      >
        <span>Show expences</span>
      </button>
      
      <button
        className="button"
        onClick={() => setFilterType(FilterType.All)}
      >
        <span>Show all</span>
      </button>

      <button
        className="button"
        onClick={() => localStorage.clear()}
      >
        <span>Clear memory</span>
      </button>
    </footer>
  )
}