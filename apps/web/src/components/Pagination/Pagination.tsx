import { Button } from 'ui';

import type { PaginationProps } from './Pagination.types';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  testData,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(testData / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePaginationClick = (cur) => {
    switch (cur) {
      case '-1':
        setCurrentPage((prev) => (prev >= 1 ? prev - 1 : prev));
        break;
      case '+1':
        setCurrentPage((prev) =>
          prev < pageNumbers.length - 1 ? prev + 1 : prev
        );
        break;
      case '-2':
        setCurrentPage(0);
        break;
      case '+2':
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
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('-2');
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
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('-1');
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
          <div key={pageNum}>
            <Button
              size='xsm'
              className={`${
                isClickToPagination(pageNum)
                  ? 'bg-primaryGray-500 hover:bg-primaryGray-300 text-white '
                  : 'hover:bg-primaryGray-500 text-primaryGray-500 bg-white'
              }  border-primaryGray-500  hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]`}
              variant='roundednavy'
              onClick={() => {
                handlePaginationClick(pageNum);
              }}
            >
              {pageNum + 1}
            </Button>
          </div>
        ))}
        <Button
          size='xsm'
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('+1');
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
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('+2');
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
