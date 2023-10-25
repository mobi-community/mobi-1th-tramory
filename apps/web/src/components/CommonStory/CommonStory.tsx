import { User } from './_components';
import { Content } from './_components/Content';
import type { storyType } from './CommonStory.types';

export const CommonStory: React.FC<{ story: storyType }> = ({ story }) => {
  return (
    <div className='relative'>
      <div className='relative z-50 h-[272px] max-w-[740px] bg-white/[0.5] pl-[30px] drop-shadow-xl'>
        <User user={story.user} />
        <Content content={story.content} />
      </div>
      <div className='bg-primaryYellow absolute left-[700px] top-5 z-0 h-[20px] w-[60px]'></div>
    </div>
  );
};
