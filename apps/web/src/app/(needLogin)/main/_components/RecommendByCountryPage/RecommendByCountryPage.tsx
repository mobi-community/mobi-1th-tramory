import { ContinentSlide, ReadMoreButton } from './_components';

export const RecommendByCountryPage: React.FC = () => {
  return (
    <div className='min-h-[calc(100vh-80px)] w-[100%] text-center'>
      <div>
        <ContinentSlide />
      </div>
      <ReadMoreButton />
    </div>
  );
};
