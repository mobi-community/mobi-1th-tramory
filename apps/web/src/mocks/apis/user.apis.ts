import { rest } from 'msw';

import { bestRecordStoriesMock } from '@/app/(needLogin)/mypage/my_story/_mocks/bestRecordStoriesMock';
import { planStoriesMock } from '@/app/(needLogin)/mypage/my_story/plan/_mocks/planStoriesMock';
import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';

export const getUserData = rest.get('/user/info', (req, res, ctx) => {
  const mockUserData = {
    nickName: '히수짱',
    content: '안녕! 나는 박히수',
    profileImage:
      'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
    backgroundImage:
      'https://i.pinimg.com/564x/cf/41/54/cf4154334c36bc1196b11d729c3a77d4.jpg',
    bestRecordStories: bestRecordStoriesMock,
    recordStories: recordStoriesMock,
    planStories: planStoriesMock,
  };

  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: '성공',
      data: mockUserData,
    })
  );
});
