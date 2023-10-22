import badgeDefault from '/public/assets/badge_default.svg';

export type BadgeConfig = typeof badgeConfig;

export const badgeConfig = {
  badgeDefault,
  badges: [
    {
      title: '여행 계획',
      description: [
        {
          title: '첫 여행<br/>축하합니다!',
        },
        {
          title: '여행<br/>5회 달성!',
        },
        {
          title: '여행<br/>10회 달성!',
        },
        {
          title: '여행<br/>50회 달성!',
        },
        {
          title: '여행<br/>100회 달성!',
        },
      ],
      info: {
        title: '여행 계획 배지',
        description:
          '여행을 계획하고, 그 계획을 작성해보세요!<br />작성 횟수에 따라 특별한 뱃지를 획득할 수 있습니다!',
      },
    },
    {
      title: '여행 계획',
      description: [
        {
          title: '첫 여행<br/>기록 작성!',
        },
        {
          title: '여행 기록<br/>5회 작성!',
        },
        {
          title: '여행 기록<br/>10회 작성!',
        },
        {
          title: '여행 기록<br/>50회 작성!',
        },
        {
          title: '여행 기록<br/>100회 작성!',
        },
      ],
      info: {
        title: '여행 기록 배지',
        description:
          '여행 기록을 남기고, 공유하세요!<br />첫번째 여행지 기록부터 특별한 도시, 국가 방문까지,<br />다양한 이벤트를 기록하여 특별한 뱃지를 획득해보세요!',
      },
    },
    {
      title: '이벤트',
      description: [
        {
          title: '메리 크리스마스',
          subtitle: '크리스마스<br />여행 일정 달성!',
        },
        {
          title: '해피 뉴 이어',
          subtitle: '1월 1일<br />여행 일정 달성!',
        },
        {
          title: '봄봄봄',
          subtitle: '따뜻한 봄 여행',
        },
        {
          title: '여름',
          subtitle: '뜨거운 여름 여행',
        },
        {
          title: '가을',
          subtitle: '선선한 가을 여행',
        },
        {
          title: '겨울',
          subtitle: '설레는 겨울 여행',
        },
      ],
      info: {
        title: '이벤트 배지',
        description:
          '특별한 날 여행을 떠나보세요!<br />특별한 날에 맞춰 여행을 떠나고<br />기록을 남기면 뱃지를 획득할 수 있습니다!',
      },
    },
    {
      title: '방문 대륙',
      description: [
        {
          title: '남아메리카',
        },
        {
          title: '북아메리카',
        },
        {
          title: '아시아',
        },
        {
          title: '아프리카',
        },
        {
          title: '오세아니아',
        },
        {
          title: '유럽 ',
        },
      ],
      info: {
        title: '방문 대륙 배지',
        description:
          '세계 각 대륙을 방문하며 대륙별 방문자 뱃지를 모아보세요!<br />모든 대륙의 뱃지를 모으면 월드 트래블러 뱃지를 획득할 수 있을지도?',
      },
    },
    {
      title: '카테고리별',
      description: [
        {
          title: '액티비티',
        },
        {
          title: '식도락',
        },
        {
          title: '문화예술',
        },
        {
          title: '휴양',
        },
        {
          title: '쇼핑',
        },
      ],
      info: {
        title: '카테고리별 배지',
        description:
          '여러분의 다양한 여행 활동에 따른 카테고리별<br />뱃지를 획득하세요!,<br />액비티비, 식도락 문화예술 등 다양한 카테고리에서 활동을<br />기록하고, 그에 해당하는 뱃지를 얻으세요!',
      },
    },
  ],
};
