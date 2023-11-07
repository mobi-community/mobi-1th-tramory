export type RecordStoriesMock = typeof recordStoriesMock;

export const recordStoriesMock = [
  {
    id: 'KWDS12384K12',
    user: {
      profileImage:
        'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
      userId: '히수',
      date: new Date(),
    },
    content: {
      category: '식도락',
      date: new Date(),
      location: 'Japan, Osaka',
      title: '일본 오사카 여행 hihi',
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
        date: new Date(),
        country: '일본',
        location: '1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071',
        description:
          '도톤보리에서 타코야끼를 맛보며 오사카의 활기찬 거리를 걸었습니다.',
      },
    ],
  },
  {
    id: 'KWDS12384K13',
    user: {
      profileImage:
        'https://i.pinimg.com/564x/2c/09/ca/2c09caff53e90c49e4313719a3e90fb2.jpg',
      userId: '히수짱',
      date: new Date(),
    },
    content: {
      category: '식도락',
      date: new Date(),
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
];
