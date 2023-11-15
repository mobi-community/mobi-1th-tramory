import { Button } from 'ui';

import { PaginationProps } from '@/components/Pagination/Pagination.types';

// url 변동 막은 페이지네이션
export const CustomPagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  dataLength,
  bgColor,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(dataLength / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginationClick = (cur, e) => {
    e.preventDefault();
    switch (cur) {
      case 'prevPage':
        setCurrentPage((prev) => (prev >= 1 ? prev - 1 : prev));
        break;
      case 'nextPage':
        setCurrentPage((prev) =>
          prev < pageNumbers.length - 1 ? prev + 1 : prev
        );
        break;
      case 'firstPage':
        setCurrentPage(0);
        break;
      case 'lastPage':
        setCurrentPage(pageNumbers.length - 1);
        break;
      default:
        setCurrentPage(cur);
    }
  };

  const isClickToPagination = (num) => {
    return currentPage === num;
  };

  return (
    <div>
      <div className='flex gap-2'>
        <Button
          size='xsm'
          className={`border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px] ${
            currentPage === 0 ? 'text-gray-400' : 'text-blue-500'
          }`}
          variant='roundednavy'
          onClick={(e) => {
            handlePaginationClick('firstPage', e);
          }}
        >
          <span
            style={{ fontSize: '17px' }}
            className='material-icons-outlined'
          >
            keyboard_double_arrow_left
          </span>
        </Button>
        <Button
          size='xsm'
          className={`border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px] ${
            currentPage === 0 ? 'text-gray-400' : 'text-blue-500'
          }`}
          variant='roundednavy'
          onClick={(e) => {
            handlePaginationClick('prevPage', e);
          }}
        >
          <span
            style={{ fontSize: '17px' }}
            className='material-icons-outlined'
          >
            keyboard_arrow_left
          </span>
        </Button>
        {pageNumbers.map((pageNum) => (
          <Button
            key={pageNum}
            size='xsm'
            className={`${
              isClickToPagination(pageNum) && bgColor === 'gray'
                ? 'bg-primaryGray-500 hover:bg-primaryGray-300 text-white'
                : isClickToPagination(pageNum) && bgColor === 'blue'
                ? 'bg-primaryBlue-500 hover:bg-primaryBlue-300 text-white'
                : bgColor === 'blue'
                ? 'hover:bg-primaryBlue-300 text-primaryGray-500 bg-white'
                : 'hover:bg-primaryGray-500 text-primaryGray-500 bg-white'
            }  border-primaryGray-500 h-5 w-[30px] rounded-full border text-[12px]`}
            variant='roundednavy'
            onClick={(e) => {
              handlePaginationClick(pageNum, e);
            }}
          >
            {pageNum + 1}
          </Button>
        ))}
        <Button
          size='xsm'
          className={`border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px] ${
            currentPage === pageNumbers.length - 1
              ? 'text-gray-400'
              : 'text-blue-500'
          }`}
          variant='roundednavy'
          onClick={(e) => {
            handlePaginationClick('nextPage', e);
          }}
        >
          <span
            style={{ fontSize: '17px' }}
            className='material-icons-outlined'
          >
            keyboard_arrow_right
          </span>
        </Button>
        <Button
          size='xsm'
          className={`border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px] ${
            currentPage === pageNumbers.length - 1
              ? 'text-gray-400'
              : 'text-blue-500'
          }`}
          variant='roundednavy'
          onClick={(e) => {
            handlePaginationClick('lastPage', e);
          }}
        >
          <span
            className='material-icons-outlined'
            style={{ fontSize: '17px' }}
          >
            keyboard_double_arrow_right
          </span>
        </Button>
      </div>
    </div>
  );
};
