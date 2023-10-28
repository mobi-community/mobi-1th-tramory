export const InquiryMockData = [
  {
    id: 1,
    category: '신고하기',
    title: '문의 드립니다. 이거 신고 가능한가요?',
    answerState: true,
    date: '2023-09-02',
    description:
      '다른 사람들 스토리를 보다가 이 내용이 부적절한 내용인지 아닌지 잘 모르겠어서요.<br/> 확인해보시고 신고 가능하다면 숨김처리해주세요',
    attachment: 'capture.jpg',
    comment: {
      administrator: '관리자',
      description:
        '부적절합니다^^ 해당 게시물에 대해 숨김 처리 진행하였습니다.',
    },
  },
  {
    id: 2,
    category: '오류 신고',
    title: '홈페이지에 오타있는데요. 수정해주세요',
    answerState: false,
    date: '2023-09-02',
    description:
      '내 스토리가 아니라 ‘네스토리’라고 되어있습니다.<br/>아래 첨부파일 확인해주세요;;<br/>빠른 수정 부탁드립니다~~~',
    attachment: '',
    comment: {},
  },
];
