import React from "react";

import "./Pagination.scss";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onClickHandler,
}) => {
  const pageNumbers = [];
  const maxPage = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <ul className="pagination">
        {pageNumbers.map((page, index) => (
          <li
            className={`page-item${currentPage === page ? " active" : ""}`}
            key={index}
          >
            <a
              onClick={() => onClickHandler(page)}
              href="#"
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
