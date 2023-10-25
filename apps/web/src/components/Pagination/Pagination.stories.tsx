import { Pagination } from './Pagination';

const storyConfig = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default storyConfig;

export const DefaultPagination = {
  args: {
    currentPage: 1,
    itemsPerPage: 8,
    testData: 80,
  },
};
