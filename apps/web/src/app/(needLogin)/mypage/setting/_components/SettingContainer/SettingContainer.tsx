import type { SettingContainerProps } from './SettingContainer.types';

export const SettingContainer: React.FC<SettingContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div className='my-14 h-auto w-[1024px] rounded-t-[80px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
      {title && (
        <div className='px-12 pt-12'>
          <div className='flex'>
            <p className='text-primaryBlue-700 mb-5 text-xl font-bold'>
              {title}
            </p>
          </div>
          <div className='bg-primaryGray-300 h-px w-full'></div>
        </div>
      )}
      {children}
    </div>
  );
};
