export const AccountPrivateOrPublic = () => {
  return (
    <div>
      <div className='text-primaryGray-500 px-7 font-medium'>
        <h1 className='text-lg'>계정공개 여부</h1>
        <div className='bg-primaryGray-300 my-5 h-px w-full'></div>
        <div className='ml-4'>
          <p>
            계정 비공개 시, 프로필 및 스토리가 전체 비공개 처리되어 외부에
            공개되지 않습니다.
          </p>
          <p className='text-sm text-rose-500'>
            * 스토리를 공개 설정하여도, 계정 비공개 상태에서는 공개되지
            않습니다.
          </p>
          <div className='flex'>
            <div className='mr-5'>
              <input
                id='accountPublic'
                name='radio'
                type='radio'
                className='accent-primaryBlue-700 mr-2'
              />
              <label htmlFor='accountPublic'>예</label>
            </div>
            <div>
              <input
                id='accountPrivate'
                name='radio'
                type='radio'
                className='accent-primaryBlue-700 mr-2'
              />
              <label htmlFor='accountPrivate'>아니오</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
