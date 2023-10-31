import { useAtom } from 'jotai';
import { Control, Controller } from 'react-hook-form';

import { travelCategory } from '@/constants/travelStep3Category.constants';
import { selectedCategoryIdAtom } from '@/store/step3Category.atom';
import type { IregisterFormvalue } from '@/types/registerStep.types';

interface IStep3CategoryProps {
  control: Control<IregisterFormvalue>;
}

const Step3Category: React.FC<IStep3CategoryProps> = ({ control }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useAtom(
    selectedCategoryIdAtom
  );

  return (
    <>
      <Controller
        name='category'
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <div className='mt-[20px] flex w-[600px] flex-wrap justify-center '>
              {travelCategory.map((category) => (
                <div
                  key={category.id}
                  className={`m-3 flex h-[50px] w-[175px] cursor-pointer rounded-sm  ${
                    selectedCategoryId === category.id
                      ? 'bg-[#AFCDF2]'
                      : 'bg-white'
                  }`}
                  onClick={() => {
                    setSelectedCategoryId(category.id);
                    field.onChange(category.label);
                  }}
                >
                  <div className='ml-[12px] flex items-center justify-center'>
                    <span className='material-icons-outlined'>
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <div className='bg-primaryBlue-100 ml-[10px] mt-[-13px] h-[20px] w-[20px] rounded-[50%] '></div>
                    <div className='text-primaryGray-300 ml-[5px] mt-[3px]  flex w-[32px] justify-center text-[22px]'>
                      |
                    </div>
                    <div className='bg-primaryBlue-100 ml-[10px] mt-[2px] h-[20px] w-[20px] rounded-[50%]'></div>
                  </div>
                  <li
                    className={`flex list-none items-center justify-center text-[19px] font-semibold ${
                      category.id == 2 || category.id == 3
                        ? 'ml-[7px] '
                        : category.id == 0
                        ? 'ml-[15px] '
                        : 'ml-[23px] '
                    }`}
                  >
                    {category.label}
                  </li>
                </div>
              ))}
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Step3Category;
