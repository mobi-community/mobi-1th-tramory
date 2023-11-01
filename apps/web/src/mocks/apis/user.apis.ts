import { rest } from 'msw';

export const getUserData = rest.get('/user/info', (req, res, ctx) => {
  const mockUserData = {
    nickName: '히수짱',
    content: '안녕! 나는 박히수',
    profileImage:
      'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
    backgroundImage:
      'https://i.pinimg.com/564x/cf/41/54/cf4154334c36bc1196b11d729c3a77d4.jpg',
    bestRecordStories: [
      {
        id: 'A12B34CD',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'United States, Los Angeles, CA',
          title: '미국 LA 여행 계획',
          text: '안녕하세요! 일본을 누비며 맛있는 여행을 즐겨보았어요. 오사카의 타코야끼, 도쿄의 초밥, 교토의 유자라멘과 함께한 식도락 여행은 정말 특별했습니다...',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 12,
          viewed: 45,
          tags: ['일본', '오사카', '타코야끼'],
        },
        isRecord: true,
        isDraft: false,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '일본',
            location: '1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071 도쿄',
            description: '오사카에서의 첫 번째 날입니다.',
          },
        ],
      },
      {
        id: 'E56F78GH',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'France, Paris',
          title: '프랑스 파리 여행 계획',
          text: '에펠탑과 몽마르트 언덕을 찾아서...',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 5,
          viewed: 32,
          tags: ['프랑스', '파리', '에펠탑'],
        },
        isRecord: false,
        isDraft: true,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '프랑스',
            location: '에펠탑',
            description: '에펠탑을 방문한 첫 번째 날입니다.',
          },
        ],
      },
      {
        id: 'I910JKLM',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'South Korea, Seoul',
          title: '한국 서울 여행 계획',
          text: '명동과 남산, 그리고 한강에서의 즐거운 시간들...',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 8,
          viewed: 50,
          tags: ['한국', '서울', '한강'],
        },
        isRecord: true,
        isDraft: false,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '한국',
            location: '명동',
            description: '서울 명동에서의 쇼핑 시간입니다.',
          },
        ],
      },
    ],
    recordStories: [
      {
        id: 'A12B34CD',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'Japan, Osaka',
          title: '일본 오사카 여행 기록',
          text: '오사카에서의 멋진 시간! 타코야끼와 함께한 거리 탐험, 도톤보리의 활기찬 분위기를 느끼며 특별한 추억을 만들었습니다.',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 12,
          viewed: 45,
          tags: ['일본', '오사카', '타코야끼'],
        },
        isRecord: true,
        isDraft: false,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '일본',
            location: '1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071',
            description:
              '도톤보리에서 타코야끼를 맛보며 오사카의 활기찬 거리를 걸었습니다.',
          },
        ],
      },
      {
        id: 'E56F78GH',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'South Korea, Seoul',
          title: '한국 서울 여행 기록',
          text: '서울의 명동에서 쇼핑을 즐기고 남산 타워에서 아름다운 야경을 감상했습니다.',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 8,
          viewed: 50,
          tags: ['한국', '서울', '명동'],
        },
        isRecord: true,
        isDraft: false,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '한국',
            location: '명동',
            description:
              '서울의 명동에서 쇼핑을 즐기고 남산 타워로 이동해 아름다운 서울의 야경을 감상했습니다.',
          },
        ],
      },
    ],
    planStories: [
      {
        id: 'A12B34CD',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'United States, Los Angeles, CA',
          title: '미국 LA 여행 계획',
          text: 'LA의 화창한 날씨와 멋진 해변을 즐길 계획입니다. 할리우드 명소들을 방문하고 쇼핑도 즐길 예정입니다.',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 12,
          viewed: 45,
          tags: ['미국', 'LA', '여행'],
        },
        isRecord: false,
        isDraft: true,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '미국',
            location: 'Los Angeles, CA',
            description:
              'LA 도착 후 산타 모니카 해변에서의 휴식과 함께 할리우드 명소들을 방문할 예정입니다.',
          },
        ],
      },
      {
        id: 'E56F78GH',
        user: {
          profileImage:
            'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
          userId: '히수짱',
          date: new Date().toISOString(),
        },
        content: {
          date: new Date().toISOString(),
          location: 'France, Paris',
          title: '프랑스 파리 여행 계획',
          text: '로맨틱한 파리에서 에펠탑 방문과 세느 강 크루즈를 즐기며 프랑스 문화를 경험할 계획입니다.',
          images: [
            'https://i.pinimg.com/564x/ee/5a/5b/ee5a5b383d3f237518ec873729187589.jpg',
            'https://i.pinimg.com/564x/27/f9/6e/27f96eca831d088cd565d1dae6fcae7c.jpg',
            'https://i.pinimg.com/564x/bc/c7/ed/bcc7edc287bebcdcb748c862e0d0f852.jpg',
          ],
          liked: 15,
          viewed: 60,
          tags: ['프랑스', '파리', '여행'],
        },
        isRecord: false,
        isDraft: true,
        detailDescription: [
          {
            day: 1,
            date: new Date().toISOString(),
            country: '프랑스',
            location: '파리',
            description:
              '파리 도착 후 에펠탑 방문과 세느 강 크루즈를 즐길 예정입니다. 로맨틱한 분위기 속에서 프랑스 음식도 맛볼 계획입니다.',
          },
        ],
      },
    ],
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
