import { SearchInput, SelectRange } from './_components';

export const SearchBar: React.FC = () => {
  return (
    <div className='absolute left-1/2 top-8 z-[50] -translate-x-1/2 transform'>
      <div className='border-primaryGray-100 relative flex min-h-[50px] w-[580px] rounded border-[1px]'>
        <SelectRange />
        <SearchInput />
      </div>
    </div>
  );
};
