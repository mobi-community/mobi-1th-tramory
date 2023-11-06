import { storyContentType } from '@/components/CommonStory';

import { ImageSlide } from '../ImageSlide/ImageSlide';
import { ReactionBox } from '../ReactionBox/ReactionBox';

export const Content: React.FC<{
  content: storyContentType;
  postId: number;
}> = ({ content, postId }) => {
  const { title, text, images, liked, viewed, tags } = content;

  return (
    <div className='mt-[10px] flex w-full pb-[10px]'>
      <div className='mr-[10px] w-[300px]'>
        <div className='text-sm font-bold'>{title}</div>
        <div className='text-primaryGray-400 mt-[10px] h-[90px] w-full overflow-hidden text-ellipsis text-[10px]'>
          {text}
        </div>
        <div className=' flex w-full justify-between truncate'>
          <div className='mt-[10px] flex w-[87px] justify-between'>
            <ReactionBox category='liked' value={liked} />
            <ReactionBox category='viewed' value={viewed} />
          </div>
          <div className='mt-1 w-[190px]'>
            {tags.map((tag) => (
              <span
                key={Math.random() * 1000}
                className='border-primaryGray-300 text-primaryGray-300 ml-2 border-b-[1px]  text-[10px]'
              >
                # {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <ImageSlide images={images} postId={postId} />
      </div>
    </div>
  );
};
