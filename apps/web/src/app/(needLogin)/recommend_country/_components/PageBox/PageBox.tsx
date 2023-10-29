import { Button } from 'ui';

import { recomContinentType, recommendPageConfig } from '@/constants';

import { ContinentSlide } from '../ContinentSlide/ContinentSlide';

export const PageBox: React.FC<{
  continentArray: recomContinentType[];
  isTop: boolean;
  handleScroll: () => void;
}> = ({ continentArray, isTop, handleScroll }) => {
  const handlePageBottom = () => (isTop ? '' : 'mb-[20px]');

  const handleButton = () => handleScroll();

  return (
    <div className='min-h-[calc(100vh-80px)]'>
      <div className={`m-auto  mt-[100px] w-[80%]`}>
        {continentArray.map((continent) => (
          <ContinentSlide continent={continent} key={continent.id} />
        ))}
      </div>
      <div className={`mt-[25px] text-center ${handlePageBottom()}`}>
        <Button variant='roundedgreen' onClick={() => handleButton()}>
          {recommendPageConfig.pageButtonText(!isTop)}{' '}
          {recommendPageConfig.pageButtonIcon(!isTop)}
        </Button>
      </div>
    </div>
  );
};
