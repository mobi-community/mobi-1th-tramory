export const likeStoriesMock = [
  {
    id: 23334555,
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
    id: 76654322,
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
];
