import { UserInfo, userInfo } from '@/app/(needLogin)/mypage/_mocks';

export type CancelMembersipConfig = {
  title?: string;
  description?: string;
  deleteData?: string[];
  user?: UserInfo;
  confirmCheckDesc?: string;
};
export const cancelMembersipConfig: CancelMembersipConfig[] = [
  {
    title: '탈퇴하기 전에',
    description:
      '탈퇴 시 본 서비스에 등록한 모든 정보가 영구적으로 삭제되며, 재가입 또는 복구가 불가합니다.',
  },
  {
    title: '미리 백업하기',
    description:
      '등록한 서비스에서 정보 백업을 원하실 경우, 탈퇴 이전에 해당 서비스에서 백업을 진행해주세요. 탈퇴 후에는 데이터를<br /> 복구할 수 없습니다.',
  },
  {
    title: '미리 관리하기',
    description:
      '서비스 이용 중 본인의 계정에 귀속되지 않은 정보는 자동으로 삭제되지 않으며, 탈퇴 시 수정이나 삭제가 불가능합니다.<br /> 본인 계정에 귀속되지 않은 정보를 수정하거나 삭제하려는 경우, 회원탈퇴 이전에 해당 서비스에서 수정 또는 삭제를<br/> 진행해주세요',
  },
  {
    title: '탈퇴하려는 계정',
    user: userInfo,
  },
  {
    title: '삭제되는 정보',
    deleteData: ['활동 데이터', '기록 데이터', '개인정보 데이터'],
  },
  {
    confirmCheckDesc:
      '회원 탈퇴를 진행하며 해당 계정에 귀속된 모든 정보를 삭제하는 데 동의합니다.',
  },
];
