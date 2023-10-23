import SearchInput from './SearchInput';

export const SearchBar: React.FC = () => {
  return (
    <div className='absolute left-[35vw] top-8'>
      <div className='border-primaryGray-100 relative m-auto min-h-[60px] w-[620px] rounded border-[1px]'>
        <SearchInput />
      </div>
    </div>
  );
};
