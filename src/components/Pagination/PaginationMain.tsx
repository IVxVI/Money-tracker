import React, { useEffect, useState } from "react";
import './PaginationFooter';
import 'bulma/bulma.sass';
import { PaginationFooter } from "./PaginationFooter";
import { ExpenceItem } from "../../types/ExpenceItem";
import { IncomeItem } from "../../types/IncomeItem";
import { Body } from "../Body/Body";

type Props = {
  collection: ExpenceItem[] | IncomeItem[],
  handleExpencesRemoval: (index: number) => void,
  handleIncomesRemoval: (index: number) => void,
}

export const PaginationMain: React.FC<Props> = ({ collection, handleExpencesRemoval, handleIncomesRemoval }) => {
  const [perPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(collection.length);

  useEffect(() => {
    setTotalItems(collection.length);
  }, [collection]);

  const lastInRow = Math.min(currentPage * perPage, totalItems);
  const firstInRow = (currentPage - 1) * perPage + 1;

  const visibleItems = collection.length > 1 ? collection.slice(firstInRow - 1, lastInRow) : collection;

  let perPageOptions = [4];

  if (collection.length >= 8 && collection.length <= 16) {
    perPageOptions = [4, 8]
  } else if (collection.length >= 16 && collection.length <= 32) {
    perPageOptions = [4, 8, 16]
  } else if (collection.length >= 32) {
    perPageOptions = [4, 8, 16, 32]
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <Body
        collection={visibleItems}
        onExpencesDelete={handleExpencesRemoval}
        onIncomesDelete={handleIncomesRemoval}
      />

      <div className="pagination">
        <PaginationFooter
          total={totalItems}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <p className="pagination__desctiprion">
          {collection.length > 1
          ? `Page ${currentPage} (items ${firstInRow} - ${lastInRow} of ${totalItems})`
        : `Page ${currentPage} (item 1)`}
        </p>
        <div className="pagination__selector--wrapper">
          <div className="pagination__selector">
            <select
              id="perPageSelector"
              className=""
              onChange={handlePerPage}
              value={perPage}
            >
              {perPageOptions.map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
          <label htmlFor="perPageSelector" className="pagination__selector--label">
            {`${perPage} per page`}
          </label>
        </div>
      </div>
    </div>
  );
};