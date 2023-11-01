export const bestRecordStoriesMock = [
  {
    id: 'A12B3132313214CD',
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
    id: 'E56F78G22222H',
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
];
