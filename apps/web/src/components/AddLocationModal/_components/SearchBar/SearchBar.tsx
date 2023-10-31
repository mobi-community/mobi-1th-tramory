import { SearchInput } from './_components';

export const SearchBar: React.FC = () => {
  return (
    <div className='bg-primaryBlue-100 m-auto flex min-h-[50px] w-[750px] rounded-[20px]'>
      <SearchInput />
    </div>
  );
};
