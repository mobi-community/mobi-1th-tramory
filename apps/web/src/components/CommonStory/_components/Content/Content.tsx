import type { storyContentType } from '../../CommonStory.types';
import { ImageSlide } from '../ImageSlide/ImageSlide';
import { ReactionBox } from '../ReactionBox/ReactionBox';

export const Content: React.FC<{
  content: storyContentType;
  postId: number | string;
}> = ({ content, postId }) => {
  const { title, text, images, liked, viewed, tags } = content;

  return (
    <div className='mt-[20px] flex w-[95%] justify-between pl-[5px]'>
      <div className='mr-[40px]'>
        <div className='text-base font-bold'>{title}</div>
        <div className='text-primaryGray-400 mt-[15px] h-[80px] min-w-[250px] max-w-[400px] overflow-hidden text-ellipsis text-sm'>
          {text}
        </div>
        <div className='mt-[20px] flex min-w-[250px] max-w-[400px] justify-between'>
          <div className='flex w-[125px] justify-between'>
            <ReactionBox category='liked' value={liked} />
            <ReactionBox category='viewed' value={viewed} />
          </div>
          <div className='h-[25px] w-[57%] overflow-y-hidden'>
            {tags.map((tag) => (
              <span
                key={Math.random() * 1000}
                className='border-primaryGray-300 text-primaryGray-300 ml-[5px] inline-block border-b-[1px] text-[12px]'
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
