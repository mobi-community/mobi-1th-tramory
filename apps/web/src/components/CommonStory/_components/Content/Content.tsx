import type { storyContentType } from '../../CommonStory.types';
import { ImageSlide } from '../ImageSlide';
import { ReactionBox } from '../ReactionBox';

export const Content: React.FC<{
  content: storyContentType;
  postId: number;
}> = ({ content, postId }) => {
  const { title, text, images, liked, viewed, tags } = content;

  return (
    <div className='mt-[20px] flex pl-[5px]'>
      <div className='mr-[40px]'>
        <div className='text-base font-bold'>{title}</div>
        <div className='text-primaryGray-400 mt-[15px] h-[80px] w-[460px] overflow-hidden text-ellipsis text-sm'>
          {text}
        </div>
        <div className='mt-[20px] flex justify-between'>
          <div className='flex w-[125px] justify-between'>
            <ReactionBox category='liked' value={liked} />
            <ReactionBox category='viewed' value={viewed} />
          </div>
          <div>
            {tags.map((tag) => (
              <span
                key={Math.random() * 1000}
                className='border-primaryGray-300 text-primaryGray-300 ml-[5px] border-b-[1px] text-[12px]'
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
