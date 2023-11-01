import { storyContentType } from '@/components/CommonStory';
import { ImageSlide } from '@/components/CommonStory/_components/ImageSlide';
import { ReactionBox } from '@/components/CommonStory/_components/ReactionBox';

export const StoryContent: React.FC<{
  content: storyContentType;
  postId: number | string;
}> = ({ content, postId }) => {
  const { title, text, images, liked, viewed, tags } = content;

  return (
    <div className='mt-[20px] flex pl-[5px]'>
      <div className='mr-[20px]'>
        <div className=' text-[15px] font-bold'>{title}</div>
        <div className=' text-primaryGray-400 mt-[10px] h-[70px] w-[170px] overflow-hidden text-ellipsis text-[12px]'>
          {text}
        </div>
        <div className='mt-[20px] flex flex-col'>
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
