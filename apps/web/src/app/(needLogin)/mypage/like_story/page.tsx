'use client';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';

import { Tab } from '@/components';
import { likeStoryConfig } from '@/constants';
import { currentTabAtom } from '@/store/tab.atoms';

// import materialIcon from '@/utils/materialIcon';
import { MyPageContainer } from '../_components';
import { ViewStory } from './_components';
import { LikeStory } from './_components/LikesStory/LikesStory';

const LikeStoryPage = () => {
  // const router = useRouter();
  const params = useSearchParams();
  const filter = params.get('filter');

  const [currentTab] = useAtom(currentTabAtom);
  // const [draftTab] = useAtom(draftTabAtom);

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {likeStoryConfig.map((path, index) => {
          // const isSelected =
          //   filter === path.query || (!filter && path.tabName === 'LIKES');
          // const isLikes = path.tabName === 'LIKES';
          // const handleNavigation = () => {
          //   router.push(
          //     isLikes
          //       ? '/mypage/like_story'
          //       : `/mypage/like_story?filter=${path.query}`
          //   );
          // };

          return (
            <Tab
              key={index}
              bgColor={currentTab.color}
              zIndex={currentTab.zIndex}
            >
              {/* icon을 넣으면 Tab의 p태그 children hydration 에러가 남. Tab부분을 수정해야할 거 같음 */}
              {/* <div className='flex items-center' onClick={handleNavigation}>
                {materialIcon({
                  iconName: isLikes ? 'favorite' : 'visibility',
                  size: 16,
                  style: 'mr-1',
                })}
                <Link href={'/'}>{path.tabName}</Link>
              </div> */}
              {path.tabName}
            </Tab>
          );
        })}
      </div>
      <div className='text-primaryBlue-700 mb-14 ml-10 flex w-full flex-col items-center justify-center'>
        <MyPageContainer title='관심 스토리'>
          <div className='px-12'>{filter ? <ViewStory /> : <LikeStory />}</div>
        </MyPageContainer>
      </div>
    </div>
  );
};

export default LikeStoryPage;
