import { Button } from 'ui';

export const StoryButtons: React.FC = () => {
  return (
    <div className='mr-[35px] mt-[45px] flex'>
      <Button variant='skyblue' className='h-[30px] w-[53px]'>
        수정
      </Button>
      <Button variant='coralpink' className='ml-[5px] h-[30px] w-[53px]'>
        삭제
      </Button>
    </div>
  );
};
