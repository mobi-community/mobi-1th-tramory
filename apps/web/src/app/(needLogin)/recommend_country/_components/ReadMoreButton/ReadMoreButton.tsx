import { Button } from 'ui';

import { recommendPageConfig } from '@/constants';

export const ReadMoreButton: React.FC = () => {
  return (
    <Button variant='roundedgreen'>
      READ MORE {recommendPageConfig.readmoreIcon}
    </Button>
  );
};
