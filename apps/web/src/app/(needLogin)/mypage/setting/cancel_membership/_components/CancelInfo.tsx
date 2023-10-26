import Image from 'next/image';
import { Button, Checkbox } from 'ui';

import { cancelMembersipConfig } from '@/constants';

export const CancelInfo = () => {
  return (
    <div className='p-16'>
      <div className='px-7'>
        <h1 className='text-primaryGray-500 text-lg font-medium'>
          {cancelMembersipConfig.map((info, index) => (
            <div key={index}>
              <h1 className='mb-5'>{info.title}</h1>
              {info.description && (
                <div className='mb-8 ml-7 flex items-center text-base'>
                  <div className='bg-primaryGray-500 mr-4 h-1 w-1 rounded-full'></div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: info.description,
                    }}
                  />
                </div>
              )}

              {info.user?.profileImage && (
                <div className='bg-primaryBlue-100 mb-8 ml-7 flex w-[400px] items-center rounded-3xl border border-[#CFDDEE] p-4'>
                  <Image
                    src={info.user?.profileImage}
                    width={40}
                    height={40}
                    alt='유저 프로필'
                    className='mr-5 rounded-full'
                    priority
                  />
                  <p className='text-base'>{info.user?.email}</p>
                </div>
              )}

              {info.deleteData?.map((deletedata, idx) => (
                <div key={idx} className='ml-7 flex items-center text-base'>
                  <div className='bg-primaryGray-500 mr-4 h-1 w-1 rounded-full'></div>
                  <div>{deletedata}</div>
                </div>
              ))}

              {info.confirmCheckDesc && (
                <div className='mb-8'>
                  <div className='bg-primaryGray-300 mb-7 h-px w-full'></div>
                  <Checkbox id='cancelMemeberConfirm' className='mr-2' />
                  <label htmlFor='cancelMemeberConfirm' className='text-base'>
                    {info.confirmCheckDesc}
                  </label>
                </div>
              )}
            </div>
          ))}
        </h1>
        <div className='flex w-full justify-center'>
          <Button
            variant='defaultnavy'
            weight='bold'
            shape='full'
            className='px-12 text-white'
          >
            탈퇴하기
          </Button>
        </div>
      </div>
    </div>
  );
};
