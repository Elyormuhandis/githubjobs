import React from "react";
import "./pagination.styles.scss";

export const Pagination = ({
  jobsPerPage,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const goNextOrPreviewHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }

    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='pagination'>
      <button disabled={currentPage === 1} onClick={goNextOrPreviewHandler}>
        {"<"}
      </button>
      {pages?.map((page, idx) => (
        <button
          className={currentPage === page && " active"}
          key={idx}
          id={page}
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={goNextOrPreviewHandler}
      >
        {">"}
      </button>
    </div>
  );
};
