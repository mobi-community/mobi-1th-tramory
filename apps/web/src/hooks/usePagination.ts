import { useState } from 'react';

export const usePagination = (itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = (currentPage + 1) * itemsPerPage;

  return { currentPage, setCurrentPage, startIdx, endIdx, itemsPerPage };
};
