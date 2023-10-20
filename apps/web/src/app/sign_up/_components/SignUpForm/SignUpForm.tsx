export const SignUpForm = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div>
          <p>ID</p>
          <p>아이디</p>
        </div>
        <div>
          <input type='text' />
        </div>
        <div>
          <button>중복 확인</button>
        </div>
      </div>
    </div>
  );
};
