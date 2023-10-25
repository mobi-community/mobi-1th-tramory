import { SearchInput } from './_components';

export const SearchBar: React.FC = () => {
  return (
    <div className='border-b-primaryGray-300 ml-[430px] flex w-[255px] border-b-[1px]'>
      <SearchInput />
    </div>
  );
};
