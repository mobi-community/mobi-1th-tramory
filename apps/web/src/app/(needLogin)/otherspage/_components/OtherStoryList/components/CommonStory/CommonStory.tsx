import { storyType } from '@/components/CommonStory';

import { Content } from './components/Content/Content';
import { User } from './components/User/User';

export const CommonStory: React.FC<{ story: storyType }> = ({ story }) => {
  return (
    <div className='relative ml-[11px] mt-10 max-h-[220px] max-w-[450px] cursor-pointer'>
      <div className='relative z-50 w-full bg-white pb-[0px] pl-[15px] drop-shadow-2xl'>
        <User user={story.user} />
        <Content content={story.content} postId={story.id} />
      </div>
      <div className='bg-primaryYellow absolute left-[430px] top-5 z-0 h-[14px] w-[40px]'></div>
    </div>
  );
};
