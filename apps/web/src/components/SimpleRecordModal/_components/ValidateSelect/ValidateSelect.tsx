import { Controller } from 'react-hook-form';

import { useSelectControl } from '@/components/SimpleRecordModal/_components/ValidateSelect/use-select-control';
import { ValidatorInput } from '@/components/ValidatorInput/ValidatorInput';

import mockdata from '../../_mock/mockOption.json';

const ValidateSelect = ({ control, name, label, required }) => {
  const { openSelect, setOpenSelect, handleSelect } = useSelectControl();

  return (
    <>
      <label className='text-primaryGray-500'>
        {label}
        {required && <span className='text-primaryGreen'>*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <div className='relative'>
            <ValidatorInput
              type='text'
              {...field}
              onClick={() => setOpenSelect(!openSelect)}
              placeholder='국가명을 입력해주세요'
              name={name}
              control={control}
              label={''}
              className=' mt-1 h-8 w-[404px] rounded-sm border border-gray-300 pl-1.5 text-sm text-xs focus:outline-none'
            />
            {openSelect && (
              <ul className='absolute z-10 w-full border border-gray-300 bg-white'>
                {mockdata.selectMock.map((select) => (
                  <li
                    key={select.code}
                    onClick={() => {
                      handleSelect(select.country, field);
                      setOpenSelect(false);
                    }}
                    className='list-none px-4 py-2 text-xs hover:bg-gray-100'
                  >
                    {select.country}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      />
    </>
  );
};

export default ValidateSelect;
