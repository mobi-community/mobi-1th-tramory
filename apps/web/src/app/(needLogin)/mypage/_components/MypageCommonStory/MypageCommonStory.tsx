import { CommonStoryProps } from '@/components/CommonStory';

import { StoryContent, StoryUser } from './_components';

export const MypageCommonStory: React.FC<CommonStoryProps> = ({
  story,
  handleMoveToDetail,
}) => {
  return (
    <div
      onClick={() => {
        handleMoveToDetail(story.id);
      }}
      className='relative cursor-pointer'
    >
      <div className='relative z-50 w-[400px] bg-white/[0.5] pb-[30px] pl-[30px] drop-shadow-xl'>
        <StoryUser user={story.user} postId={story.id} />
        <StoryContent content={story.content} postId={story.id} />
      </div>
      <div className='bg-primaryYellow absolute left-[360px] top-5 z-0 h-[20px] w-[60px]'></div>
    </div>
  );
};
