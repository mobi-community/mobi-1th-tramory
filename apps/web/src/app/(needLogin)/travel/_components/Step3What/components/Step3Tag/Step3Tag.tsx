import { Controller } from 'react-hook-form';

const Step3Tag = ({ control, id }) => {
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
