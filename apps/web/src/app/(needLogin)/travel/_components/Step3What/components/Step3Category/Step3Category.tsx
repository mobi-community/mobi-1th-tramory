import { Controller } from 'react-hook-form';

const Step3Category = ({ title, control }) => {
  return (
    <>
      <Controller
        name='category'
        control={control}
        render={({ field }) => (
          <div>
            <div
              className='text-primaryGray-500 ml-[103px] mt-[25px] text-[30px] font-semibold'
              onChange={(update) => {
                field.onChange(update);
              }}
            >
              {title}
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Step3Category;
