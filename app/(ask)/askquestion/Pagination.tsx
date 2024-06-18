import React from "react";

interface PaginateProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

const Paginate: React.FC<PaginateProps> = ({
  currentPage,
  setCurrentPage,
  totalPage,
}) => {
  const maxPages = totalPage;
  console.log(maxPages);

  const leftSide = Math.max(currentPage - 2, 1);
  const rightSide = Math.min(currentPage + 2, maxPages);

  const items = [];
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={`cursor-pointer font-bold  text-center p-2 rounded-full h-10 w-10 m-1 shadow-md ${
          number === currentPage ? "bg-[#59b792] text-white" : ""
        }`}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </div>
    );
  }

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex ">
        <div
          className="cursor-pointer font-bold text-[#4d4d4d] text-center p-2 rounded-full h-10 w-10 m-1 shadow-md"
          onClick={prevPage}
        >
          &lsaquo;
        </div>
        {items}
        <div
          className="cursor-pointer font-bold text-[#4d4d4d] text-center p-2 rounded-full h-10 w-10 m-1 shadow-md"
          onClick={nextPage}
        >
          &rsaquo;
        </div>
      </div>
    </div>
  );
};

export default Paginate;
