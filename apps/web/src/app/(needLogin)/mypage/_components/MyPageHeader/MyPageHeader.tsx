import {
  ModeSwitchButton,
  UserButton,
} from '../../../../../components/Header/_components';
import { headerConfig } from '../../../../../constants';
import materialIcon from '../../../../../utils/materialIcon';

export const MyPageHeader = () => {
  return (
    <div className='mx-20 mt-10 flex justify-end'>
      <div className='flex'>
        <ModeSwitchButton />
        <div className='flex pt-2'>
          <div>
            {materialIcon({
              iconName: 'auto_stories',
              ...headerConfig.iconStyle,
            })}
          </div>
          <div>
            {materialIcon({
              iconName: 'notifications',
              ...headerConfig.iconStyle,
            })}
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
};
