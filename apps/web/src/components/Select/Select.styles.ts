import { cva } from 'class-variance-authority';

export const selectVariants = cva(
  'relative cursor-pointer', // 공통적으로 적용될 스타일
  {
    variants: {
      variant: {
        service:
          'w-[700px] flex justify-between border py-2 px-3 rounded text-sm leading-6',
        modalCategory:
          'w-[300px] flex justify-between border py-[10px] px-4 rounded text-sm leading-6',
      },
    },
    defaultVariants: {
      variant: 'service',
    },
  }
);

export const optionVariants = cva(
  'flex flex-col border pb-2 px-3 rounded text-sm leading-6 cursor-pointer top-11',
  {
    variants: {
      variant: {
        service: 'w-[700px] bg-white/90',
        modalCategory: 'w-[300px] bg-[#EEF5FF]/90 border-[#6EA5FF] top-[52px]',
      },
    },
    defaultVariants: {
      variant: 'service',
    },
  }
);

export const oneOptionVariants = cva('mt-2', {
  variants: {
    variant: {
      service: 'hover:font-bold',
      modalCategory:
        'hover:font-bold hover:text-primaryBlue-300 text-primaryGray-500',
    },
  },
  defaultVariants: {
    variant: 'service',
  },
});
