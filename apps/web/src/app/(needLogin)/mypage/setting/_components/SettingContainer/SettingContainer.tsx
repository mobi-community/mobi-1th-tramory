import type { SettingContainerProps } from './SettingContainer.types';

export const SettingContainer: React.FC<SettingContainerProps> = ({
  children,
  title,
}) => {
  const infoMessage = '문의내용은 영업일 기준 30일 내 답변해드립니다.';

  const isServicePage = title === '서비스 문의하기';

  return (
    <div className='my-14 h-auto w-[1024px] rounded-t-[80px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      {title && (
        <div className='px-12 pt-12'>
          <div className='flex flex-col'>
            <p className='text-primaryBlue-700 mb-5 text-xl font-bold'>
              {title}
            </p>
            {isServicePage && (
              <div className='mb-4 ml-4 flex items-center'>
                <div className='bg-primaryGray-500 mr-2 h-1 w-1 rounded-full'></div>
                <p className='text-primaryGray-500 font-medium'>
                  {infoMessage}
                </p>
              </div>
            )}
          </div>
          <div className='bg-primaryGray-300 h-px w-full'></div>
        </div>
      )}
      {children}
    </div>
  );
};
