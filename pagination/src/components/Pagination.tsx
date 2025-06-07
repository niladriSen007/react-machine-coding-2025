import { useCallback } from "react";
import type { PaginationTypes } from "../types";


const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationTypes) => {
  const handlePagePrev = useCallback(() => {
    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
  }, [currentPage]);

  const handlepageNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };

  return (
    <div className="pagination_container">
      <button
        onClick={handlePagePrev}
        disabled={currentPage === 1}
        className="pagination_button"
      >
        {"<"}
      </button>
      {[...Array(totalPages).keys()]?.map((item: number) => (
        <span
          key={item}
          className={`pagination_item ${currentPage === item + 1 ? "pagination--active" : ""
            }`}
          onClick={() => {
            setCurrentPage(item + 1);
          }}
        >
          {item + 1}
        </span>
      ))}
      <button
        onClick={handlepageNext}
        disabled={currentPage === totalPages}
        className="pagination_button"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
