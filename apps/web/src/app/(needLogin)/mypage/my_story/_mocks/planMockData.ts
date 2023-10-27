import fakeProfile from '/public/images/profile-image.svg';
import fakeImage1 from '/public/images/travel_record_img01.png';
import fakeImage2 from '/public/images/travel_record_img02.png';
import fakeImage3 from '/public/images/travel_record_img03.png';
import fakeImage4 from '/public/images/travel_record_img04.png';

export const planDescription = [
  {
    id: 'A12B34CD',
    user: {
      profileImage: fakeProfile,
      userId: 'User_ID_1',
      date: new Date(),
    },
    content: {
      date: '2023 9. 24 - 10. 4',
      location: 'United States, Los Angeles, CA',
      title: '미국 LA 여행 계획',
      text: '안녕하세요! 일본을 누비며 맛있는 여행을 즐겨보았어요. 오사카의 타코야끼, 도쿄의 초밥, 교토의 유자라멘과 함께한 식도락 여행은 정말 특별했습니다...',
      images: [fakeImage1, fakeImage2, fakeImage3],
      liked: 12,
      viewed: 45,
      tags: ['일본', '오사카', '타코야끼'],
    },
    isRecord: true,
    isDraft: false,
    detailDescription: [
      {
        day: 1,
        date: '2023 9. 24 - 10. 4',
        country: '일본',
        location: '1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071 도쿄',
        description: '오사카에서의 첫 번째 날입니다.',
      },
    ],
  },
  {
    id: 'E56F78GH',
    user: {
      profileImage: fakeProfile,
      userId: 'User_ID_2',
      date: new Date(),
    },
    content: {
      date: '2023 10. 5 - 10. 10',
      location: 'France, Paris',
      title: '프랑스 파리 여행 계획',
      text: '에펠탑과 몽마르트 언덕을 찾아서...',
      images: [fakeImage2, fakeImage3, fakeImage4],
      liked: 5,
      viewed: 32,
      tags: ['프랑스', '파리', '에펠탑'],
    },
    isRecord: false,
    isDraft: true,
    detailDescription: [
      {
        day: 1,
        country: '프랑스',
        location: '에펠탑',
        description: '에펠탑을 방문한 첫 번째 날입니다.',
      },
    ],
  },
  {
    id: 'I910JKLM',
    user: {
      profileImage: fakeProfile,
      userId: 'User_ID_3',
      date: new Date(),
    },
    content: {
      date: '2023 11. 11 - 11. 20',
      location: 'South Korea, Seoul',
      title: '한국 서울 여행 계획',
      text: '명동과 남산, 그리고 한강에서의 즐거운 시간들...',
      images: [fakeImage3, fakeImage2, fakeImage1],
      liked: 8,
      viewed: 50,
      tags: ['한국', '서울', '한강'],
    },
    isRecord: true,
    isDraft: false,
    detailDescription: [
      {
        day: 1,
        country: '한국',
        location: '명동',
        description: '서울 명동에서의 쇼핑 시간입니다.',
      },
    ],
  },
];
