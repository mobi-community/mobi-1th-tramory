import { useAtom } from 'jotai';
import { Control, Controller } from 'react-hook-form';

import { formModeRecordAtom } from '@/store';

interface IStep3TagProps {
  control: Control;
  id: number;
}

const Step3Tag: React.FC<IStep3TagProps> = ({ control, id }) => {
  const [recordAtom] = useAtom(formModeRecordAtom);

  return (
    <>
      <div>
        <Controller
          name={`tag${id}`}
          control={control}
          defaultValue={recordAtom.travelHashTags[id]?.hashTag.name || ''}
          render={({ field }) => (
            <>
              <input
                {...field}
                placeholder={id === 0 ? '#여행' : '#'}
                className='ml-[10px] h-[38px] w-[135px] pl-[5px]  font-bold outline-none'
                onChange={(e) => {
                  const value = e.target.value;

                  if (!value.startsWith('#')) {
                    field.onChange(`#${value}`);
                  } else {
                    field.onChange(value);
                  }
                }}
              ></input>
            </>
          )}
        />
      </div>
    </>
  );
};

export default Step3Tag;
