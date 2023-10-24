import { SearchInput, SelectRange } from './_components';

export const SearchBar: React.FC = () => {
  return (
    <div className='absolute left-[35vw] top-8'>
      <div className='border-primaryGray-100 relative m-auto flex min-h-[50px] w-[580px] rounded border-[1px]'>
        <SelectRange />
        <SearchInput />
      </div>
    </div>
  );
};
