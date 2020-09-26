import React from "react";

import "./Pagination.scss";

const Pagination = ({ onClickHandler }) => {
  return (
    <div className="pagination">
      <span>&laquo;</span>
      <button onClick={onClickHandler}>1</button>
      <button>2</button>
      <button>3</button>
      <span>&raquo;</span>
    </div>
  );
};

export default Pagination;
