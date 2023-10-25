import { useAtom } from 'jotai';

import { storyCommunityPageConfig } from '@/constants';
import { selectedCategoryAtom } from '@/store';

export const CategoryTab: React.FC = () => {
  const [selectedCategory, setSelectedCagetory] = useAtom(selectedCategoryAtom);

  const isSelected = (category: string) =>
    category === selectedCategory ? 'text-black' : 'text-primaryGray-300';

  const isLast = (i: number, arr: string[]) =>
    i !== arr.length - 1 ? 'border-primaryGray-300  border-r-[0.5px]' : '';

  return (
    <div className='mb-[40px] ml-[140px] flex'>
      {storyCommunityPageConfig.category.map((category, i, arr) => (
        <div
          onClick={() => setSelectedCagetory(category)}
          className={`text-m  w-[100px] cursor-pointer text-center hover:text-black ${isSelected(
            category
          )} ${isLast(i, arr)}`}
          key={Math.random() * 10000}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
