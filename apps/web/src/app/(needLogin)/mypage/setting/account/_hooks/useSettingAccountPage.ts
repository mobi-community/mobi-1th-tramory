import { useAtom } from 'jotai';

import { isAccountPrivacyAtom } from '@/store/mypage.atoms';

export const useSettingAccountPage = () => {
  const [isAccountPrivacy, setIsAccountPrivacy] = useAtom(isAccountPrivacyAtom);

  const handleChangeAccountPrivacy = (value: boolean) => {
    setIsAccountPrivacy(value);
  };

  return {
    isAccountPrivacy,
    setIsAccountPrivacy,
    handleChangeAccountPrivacy,
  };
};
