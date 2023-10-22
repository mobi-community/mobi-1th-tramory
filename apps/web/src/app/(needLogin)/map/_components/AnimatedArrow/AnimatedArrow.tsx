import { MapPageConfig } from '../../../../../constants';
import materialIcon from '../../../../../utils/materialIcon';

export const AnimatedArrow: React.FC = () => {
  return (
    <div>
      {MapPageConfig.arrowText}
      <div>
        {materialIcon({ iconName: 'keyboard_double_arrow_down', size: 33 })}
      </div>
    </div>
  );
};
