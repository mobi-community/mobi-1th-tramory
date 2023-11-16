import { Select } from './Select';

const selectConfig = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: '셀렉트 디자인 확인',
      options: ['service', 'modalCategory'],
    },
    value: {
      control: 'text',
      description: '현재 선택된 값을 보여줍니다.',
    },
    options: {
      control: 'array',
      description: '선택 가능한 옵션들의 배열입니다.',
      defaultValue: ['Option 1', 'Option 2', 'Option 3'], // 기본값 설정
    },
    onChange: {
      action: 'changed',
      description: '값이 변경될 때 호출되는 함수입니다.',
    },
    initialValue: {
      control: 'text',
      description: '초기에 선택될 값을 설정합니다.',
      defaultValue: 'Option 1', // 기본값 설정
    },
  },
  tags: ['autodocs'],
};

export default selectConfig;

export const Service = (args) => <Select {...args} />;
Service.args = {
  value: '오류 신고',
  options: ['오류 신고', '신고하기', '회원가입/탈퇴/ID/PW 관련', '기타'],
  initialValue: '문의 종류를 선택해주세요',
};

export const ModalCategory = (args) => <Select {...args} />;
ModalCategory.args = {
  value: '식도락',
  options: ['식도락', '문화예술', '휴양', '쇼핑', '기타'],
  initialValue: '선택',
  variant: 'modalCategory',
};
