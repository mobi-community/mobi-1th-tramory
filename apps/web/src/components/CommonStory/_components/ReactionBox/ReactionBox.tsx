import materialIcon from '@/utils/materialIcon';

export const ReactionBox: React.FC<{
  category: string;
  value: number;
}> = ({ category, value }) => {
  return (
    <div className='border-primaryGray-300 flex h-[24px] min-w-[60px] items-center justify-center rounded-[20px] border p-[3px]'>
      <div>
        {materialIcon({
          iconName: category === 'liked' ? 'favorite' : 'visibility',
          style: `mt-[4px] mr-[3px] ${
            category === 'liked' ? 'text-primaryYellow' : 'text-primaryGray-300'
          }`,
          size: 15,
        })}
      </div>
      <div className='text-primaryGray-300 text-[12px]'>{value}</div>
    </div>
  );
};
