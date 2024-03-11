import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const nextHandler = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const prevHandler = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const toFirstHandler = () => {
    setPage(1);
    scrollTop();
  };

  const toLastHandler = () => {
    setPage(lastPage);
    scrollTop();
  };

  return (
    <div className="flex justify-between items-center py-4 px-2 gap-4 text-main-primary text-xl w-full">
      {page <= 1 ? (
        <div className="w-16 p-4"></div>
      ) : (
        <button
          className="transition-all hover:text-main-neon p-4"
          onClick={toFirstHandler}
        >
          to first
        </button>
      )}
      <div className="flex justify-center items-center">
        {page <= 1 ? null : (
          <button
            className="transition-all hover:text-main-neon "
            onClick={prevHandler}
          >
            <CaretLeft size={27} />
          </button>
        )}
        <p>
          {page}/{lastPage}
        </p>
        {page >= lastPage ? null : (
          <button
            className="transition-all hover:text-main-neon "
            onClick={nextHandler}
          >
            <CaretRight size={27} />
          </button>
        )}
      </div>
      {page >= lastPage ? (
        <div className="w-16 p-4"></div>
      ) : (
        <button
          className="transition-all hover:text-main-neon p-4"
          onClick={toLastHandler}
        >
          to last
        </button>
      )}
    </div>
  );
};

export default Pagination;
