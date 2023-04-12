import classNames from "classnames";
import { getNumbers } from "../../utils/getNumbers";
import './Pagination.scss';

type Props = {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void,
};

export const PaginationFooter: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pagesQuantity = total % perPage === 0
    ? total / perPage
    : Math.ceil(total / perPage);

  const pages = getNumbers(1, pagesQuantity);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesQuantity;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > pagesQuantity) {
      return;
    }

    onPageChange(page);
  };

  return (
    <ul className="pagination__footer">
      <li className={
        classNames('pagination__item', { disabled: isFirstPage })
      }
      >
        <a
          className="pagination__link"
          href={`#${prevPage}`}
          onClick={() => handlePageChange(prevPage)}
          aria-disabled={isFirstPage}
        >
          &laquo;
        </a>
      </li>
      {pages.map(page => (
        <li
          key={page}
          className={
            classNames('pagination__item', { active: currentPage === page })
          }
        >
          <a
            className="pagination__link"
            onClick={() => handlePageChange(page)}
            href={`#${page}`}
          >
            {page}
          </a>
        </li>
      ))}

      <li className={
        classNames('pagination__item', { disabled: isLastPage })
      }
      >
        <a
          className="pagination__link"
          href={`#${nextPage}`}
          onClick={() => handlePageChange(nextPage)}
          aria-disabled={isLastPage}
        >
          &raquo;
        </a>
      </li>
    </ul>
  );
};
