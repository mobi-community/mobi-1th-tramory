import { Control, Controller } from 'react-hook-form';

import { useTravelForm } from '@/app/(needLogin)/travel/_hooks/useTravelRegister';
import { travelCategory } from '@/constants/travelStep3Category.constants';

interface IStep3CategoryProps {
  control: Control;
}

const Step3Category: React.FC<IStep3CategoryProps> = ({ control }) => {
  const {
    registerState,
    selectedCategoryId,
    setSelectedCategoryId,
    planAtom,
    recordAtom,
  } = useTravelForm();

  return (
    <>
      <Controller
        name='theme'
        control={control}
        defaultValue={
          registerState == 'plan'
            ? planAtom.theme || ''
            : recordAtom.theme || ''
        }
        render={({ field, fieldState: { error } }) => (
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
                    field.onChange(category.id);
                  }}
                >
                  <div className='ml-[12px] flex items-center justify-center'>
                    <span className='material-icons-outlined'>
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <div className='bg-primaryBlue-100 ml-[10px] mt-[-11px] h-[20px] w-[20px] rounded-[50%] '></div>
                    <div
                      className={` ml-[4px]  mt-[0px] flex w-[32px] justify-center  text-[22px] text-xl ${
                        selectedCategoryId === category.id
                          ? 'text-white'
                          : 'text-primaryGray-300'
                      }`}
                    >
                      |
                    </div>
                    <div className='bg-primaryBlue-100 ml-[10px]  mt-[5px] h-[20px] w-[20px] rounded-[50%] '></div>
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
              {error && (
                <div className='mb-1 mr-[10px] mt-1 text-[18px] text-red-500'>
                  {error.message}
                </div>
              )}
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Step3Category;
