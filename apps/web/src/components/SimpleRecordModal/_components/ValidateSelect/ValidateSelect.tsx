import { useAtom } from 'jotai';
import { Controller } from 'react-hook-form';

import { openSelectAtom } from '../../../../store/simpleRecordModal.atom';
import mockdata from '../../_mock/mockOption.json';

const ValidateSelect = ({ control }) => {
  const [openSelect, setOpenSelect] = useAtom(openSelectAtom);

  return (
    <>
      <div className='text-primaryGray-500 ml-12 mt-7 flex'>
        국가명<p className='text-primaryGreen mb-1 ml-1'>*</p>
      </div>

      <Controller
        name='country'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <div className='relative mt-1'>
            <div className='flex'>
              <input
                {...field}
                onClick={() => setOpenSelect(!openSelect)}
                className='text-align-center ml-12 h-8 w-full max-w-[404px] rounded-sm border border-gray-300 pl-1.5 text-sm text-xs focus:outline-none'
                placeholder='국가명을 입력해 주세요'
              ></input>
              <div className='absolute ml-[427px] mt-[6px] cursor-pointer'>
                <span
                  className='material-icons-outlined '
                  style={{ fontSize: '20px', color: 'gray' }}
                >
                  search
                </span>
              </div>
            </div>
            {openSelect && (
              <div className='absolute mt-2 max-h-[100px] w-[450px] overflow-y-auto'>
                {mockdata.selectMock.map((select) => (
                  <li
                    key={select.code}
                    className='z-20 ml-12 mt-0 flex h-8 list-none items-center rounded-[2px] border-b-[1px] border-l-[1px] border-t-[1px] border-gray-300 bg-white pl-1.5 text-xs font-semibold text-green-700'
                    onClick={() => {
                      setOpenSelect(!openSelect);
                      field.onChange(select.country);
                    }}
                  >
                    {select.country}
                  </li>
                ))}
              </div>
            )}
          </div>
        )}
      />
    </>
  );
};

export default ValidateSelect;
