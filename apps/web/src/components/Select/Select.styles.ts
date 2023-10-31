export const getSelectClasses = (variant: string, isToggle: boolean) =>
  ({
    service:
      'w-[700px] flex justify-between border py-2 px-3 rounded text-sm leading-6 cursor-pointer',
    mypageCategory:
      'w-[160px] pl-4 pr-2 py-1 flex justify-end border border-primaryBlue-700 text-sm leading-6 cursor-pointer',
    modalCategory: `w-[300px] flex justify-between border py-[10px] px-4 rounded text-sm leading-6 cursor-pointer ${
      isToggle ? 'border-[#6EA5FF]' : ''
    }`,
  }[variant]);

export const getOptionClasses = (variant: string) =>
  ({
    service:
      'w-[700px] flex flex-col border pb-2 px-3 rounded text-sm leading-6 cursor-pointer bg-white/90 top-11',
    mypageCategory:
      'w-[160px] pb-2 px-3 flex flex-col items-center border border-primaryBlue-700 text-sm leading-6 cursor-pointer top-10',
    modalCategory:
      'w-[300px] flex flex-col border pb-2 px-3 rounded text-sm leading-6 cursor-pointer bg-[#EEF5FF]/90 top-11 border-[#6EA5FF] top-[52px]',
  }[variant]);

export const getMypageCategoryClasses = (variant: string) =>
  ({
    mypageCategory: 'ml-[30px]',
  }[variant]);

export const getOneOptionClasses = (variant: string) =>
  ({
    service: 'hover:font-bold mt-2',
    mypageCategory: 'hover:font-bold mt-2',
    modalCategory:
      'hover:font-bold hover:text-primaryBlue-300 mt-2 text-primaryGray-500',
  }[variant]);
