import { motion } from 'framer-motion';

import { MapPageConfig } from '../../../../../../../constants';
import materialIcon from '../../../../../../../utils/materialIcon';

export const AnimatedArrow: React.FC = () => {
  return (
    <div>
      {MapPageConfig.arrowText}
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 0.2 }}
      >
        {materialIcon({ iconName: 'keyboard_double_arrow_down', size: 33 })}
      </motion.div>
    </div>
  );
};
