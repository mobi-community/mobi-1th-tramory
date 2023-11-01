import { SearchInput } from './_components';

export const SearchBar: React.FC = () => {
  return (
    <div className='bg-primaryBlue-100 m-auto mt-10 flex min-h-[50px] w-[550px] rounded-[20px]'>
      <SearchInput />
    </div>
  );
};
