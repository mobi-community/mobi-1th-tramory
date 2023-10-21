import { Button } from 'ui';

/**
 * @Todo
 * input 부분 재사용 컴포넌트로 변경 예정
 * button hover시 bg 컬러 signup과 통일해야 함
 */
export const LoginForm = () => {
  return (
    <form>
      <div className='flex justify-between'>
        <div>
          <p className='text-primaryGray-400 text-lg font-bold'>Email</p>
          <p className='text-primaryGray-400 text-xs'>이메일</p>
        </div>
        <input className='mb-6 w-[330px] p-2' />
      </div>
      <div className='flex justify-between'>
        <div>
          <p className='text-primaryGray-400 text-lg font-bold'>PW</p>
          <p className='text-primaryGray-400 text-xs'>패스워드</p>
        </div>
        <input className='mb-6 w-[330px] p-2' />
      </div>
      <Button
        type='submit'
        className='bg-primaryGreen hover:bg-primaryGreen/90 w-full rounded-none text-base font-bold text-white'
      >
        로그인
      </Button>
      <div className='text-primaryGreen my-4 flex items-center justify-between'>
        <div className='bg-primaryGreen h-px w-[180px]'></div>
        <p className='font-bold'>or</p>
        <div className='bg-primaryGreen h-px w-[180px]'></div>
      </div>
      <div>
        <Button className='text-primaryGray-500 w-full rounded-none bg-white'>
          <span>구글 로고</span>Sign in with Google
        </Button>
      </div>
      <div className='mt-6 flex items-center justify-between'>
        <p className='text-primaryGray-400 font-bold'>회원이 아니신가요?</p>
        <Button
          variant='outline'
          className='text-primaryGreen border-primaryGreen hover:bg-primaryGreen rounded-none bg-transparent px-24 text-base font-bold hover:text-white'
        >
          회원가입
        </Button>
      </div>
    </form>
  );
};
