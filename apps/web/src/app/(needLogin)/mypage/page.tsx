import { Button } from 'ui';

import { MyPageContainer } from './_components';

const MyPage = () => {
  return (
    <div>
      <MyPageContainer>
        <Button>이미지 수정</Button>
        <Button>이미지 삭제</Button>
      </MyPageContainer>
    </div>
  );
};

export default MyPage;
