import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { CommonStory, Pagination } from '@/components';
import { usePagination } from '@/hooks/usePagination';

import { useViewStory } from '../../_hooks/useViewStory';

export const ViewStory = () => {
  const router = useRouter();
  const { currentPage, setCurrentPage, startIdx, endIdx, itemsPerPage } =
    usePagination(4);
  const { viewStories, setViewStories } = useViewStory();

  useEffect(() => {
    const fetchUserViewStories = async () => {
      try {
        const response = await fetch('/user/view_story');

        const data = await response.json();

        if (response.ok) {
          setViewStories(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserViewStories();
    // eslint fix
  }, [setViewStories]);

  if (viewStories.length <= 0) {
    return (
      <div className='mb-[180px] mt-[150px] text-center text-[22px] font-bold'>
        최근 본 스토리가 없습니다
      </div>
    );
  }

  if (viewStories.length)
    return (
      <>
        <div className='grid grid-cols-2 gap-8'>
          {viewStories.slice(startIdx, endIdx).map((story) => (
            <CommonStory
              story={story}
              key={Math.random() * 1000}
              handleMoveToDetail={() =>
                router.push(`/story_detail/${story.id}`)
              }
            />
          ))}
        </div>
        <div className='mb-8 mt-20 flex justify-center'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            dataLength={viewStories.length}
            bgColor='gray'
          />
        </div>
      </>
    );
};
