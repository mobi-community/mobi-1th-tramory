import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { CommonStory, Pagination } from '@/components';
import { viewStoriesAtom } from '@/store/mypage.atoms';

export const ViewStory = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);
  const startIdx = currentPage * itemsPerPage;
  const endIdx = (currentPage + 1) * itemsPerPage;
  const [viewStories, setViewStories] = useAtom(viewStoriesAtom);

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
        <div className='my-8 flex justify-center'>
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
