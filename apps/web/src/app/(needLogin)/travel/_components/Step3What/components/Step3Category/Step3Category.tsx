import { useAtom } from 'jotai';
// import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { travelCategory } from '@/constants/travelStep3Category.constants';
import { selectedCategoryIdAtom } from '@/store/step3Category.atom';

const Step3Category = ({ title, control }) => {
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
            <div className='text-primaryGray-500  mb-[10px] ml-[120px] mt-[60px] text-[30px] font-semibold'>
              {title}
            </div>
            <div className='mt-[20px] flex'>
              {travelCategory.slice(0, 3).map((category) => (
                <div
                  key={category.id}
                  className={`m-3 flex h-[50px] w-[170px] cursor-pointer rounded-sm  ${
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
                      category.id == 1 ? 'ml-[30px]' : 'ml-[13px]'
                    }`}
                  >
                    {category.label}
                  </li>
                </div>
              ))}
            </div>
            <div className='flex '>
              {travelCategory.slice(3, 6).map((category) => (
                <div
                  key={category.id}
                  className={`m-3 flex h-[50px] w-[170px] cursor-pointer rounded-sm  ${
                    selectedCategoryId === category.id
                      ? 'bg-[#AFCDF2]'
                      : 'bg-white'
                  }`}
                  onClick={() => {
                    field.onChange(category.label);
                    setSelectedCategoryId(category.id);
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
                    <div className='bg-primaryBlue-100 ml-[10px] mt-[2px] h-[20px] w-[20px] rounded-[50%] '></div>
                  </div>
                  <li
                    className={`flex list-none items-center justify-center text-[19px] font-semibold ${
                      category.id == 3 ? 'ml-[10px]' : 'ml-[30px]'
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
