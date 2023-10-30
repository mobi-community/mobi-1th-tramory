import { Control, Controller } from 'react-hook-form';

import type { IregisterFormvalue } from '@/types/registerStep.types';

interface IStep3TagProps {
  control: Control<IregisterFormvalue>;
  id: number;
}

const Step3Tag: React.FC<IStep3TagProps> = ({ control, id }) => {
  return (
    <>
      <div>
        <Controller
          name={`tag${id}`}
          control={control}
          defaultValue={''}
          render={({ field }) => (
            <>
              <input
                {...field}
                placeholder={id === 0 ? '#여행' : ''}
                className='ml-[10px] h-[38px] w-[135px] pl-[5px]  outline-none'
              ></input>
            </>
          )}
        />
      </div>
    </>
  );
};

export default Step3Tag;
