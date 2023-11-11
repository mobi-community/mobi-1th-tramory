'use client';

import { useRouter } from 'next/navigation';

import { storyCommunityPageConfig } from '@/constants';

import { useStoryCommunity } from '../../_hooks/useStoryCommunity';

export const CategoryTab: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useStoryCommunity();

  const isSelected = (category: string) =>
    category === selectedCategory ? 'text-black' : 'text-primaryGray-300';

  const isLast = (i: number, arr: string[]) =>
    i !== arr.length - 1 ? 'border-primaryGray-300  border-r-[0.5px]' : '';

  const router = useRouter();

  return (
    <div className='my-[40px] flex justify-center'>
      {storyCommunityPageConfig.category.map((category, i, arr) => (
        <div
          onClick={() => {
            setSelectedCategory(category);
            router.push(`/story_community?category=${category}`);
          }}
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
