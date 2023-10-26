import { Dispatch, SetStateAction } from 'react';

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  itemsPerPage: number;
  //testdata는 실제 데이터 타입으로 변경예정
  testData: number;
}
