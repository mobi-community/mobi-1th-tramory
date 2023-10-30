import { forwardRef, Ref } from 'react';
import { Input } from 'ui';

export const DateInput = forwardRef(
  (
    { value, onClick }: { value: string; onClick: VoidFunction },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div className='relative cursor-pointer' onClick={onClick} ref={ref}>
        <Input
          value={value}
          readOnly
          className='placeholder:text-primaryGray-400 ml-[33px] h-[46px] w-[300px] rounded border border-[#e5e7eb] text-sm focus-visible:border-[#6EA5FF] focus-visible:ring-[0]'
          placeholder='날짜를 지정해주세요'
        />
        <span
          className='material-icons-outlined'
          style={{
            position: 'absolute',
            top: '10px',
            right: '16px',
          }}
        >
          calendar_month
        </span>
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';
