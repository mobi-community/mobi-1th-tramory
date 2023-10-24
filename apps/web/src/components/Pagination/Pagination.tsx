'use client';
import { useState } from 'react';
import { Button } from 'ui';

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  //testData는 추후 실제 데이터 로직으로 변경예정
  const testData = 80;
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
          -2
        </Button>
        <Button
          size='xsm'
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('-1');
          }}
        >
          -1
        </Button>
        {pageNumbers.map((pageNum) => (
          <>
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
          </>
        ))}
        <Button
          size='xsm'
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('+1');
          }}
        >
          +1
        </Button>
        <Button
          size='xsm'
          className='border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-500 h-5 w-[30px] rounded-full text-[12px]'
          variant='roundednavy'
          onClick={() => {
            handlePaginationClick('+2');
          }}
        >
          +2
        </Button>
      </div>
    </div>
  );
};
