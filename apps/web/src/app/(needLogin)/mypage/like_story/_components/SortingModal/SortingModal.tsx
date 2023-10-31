import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Input } from 'ui';

import { Select } from '@/components/Select/Select';
import { categoryOption } from '@/constants/select_options.constants';
import materialIcon from '@/utils/materialIcon';

import { DateInput } from '../DateInput/DateInput';
import { DateRangeRadioGroup } from '../DateRangeRadioGroup/DateRangeRadioGroup';

export const SortingModal = ({ setIsToggleModal }) => {
  const [dateRange, setDateRange] = useState([new Date(), null]);
  const [startDate, endDate] = dateRange;
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [selectedCountry, setSeletedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterLikeStory = () => {
    console.log('기간:', dateRange);
    console.log('국가:', selectedCountry);
    console.log('카테고리:', selectedCategory);
  };

  return (
    <div className='fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
      <div className='rounded-lg border border-gray-300 bg-white px-5 pb-12 pt-5 shadow-md'>
        <div className='mb-1 flex flex-col'>
          <div className='flex w-full justify-end'>
            <button
              className='h-6 w-6 cursor-pointer'
              onClick={() => {
                setIsToggleModal(false);
                setSelectedCategory('');
              }}
            >
              {materialIcon({
                iconName: 'close',
              })}
            </button>
          </div>
          <div className='text-primaryGray-400 mx-12 flex flex-col text-[18px]'>
            <div className='relative mb-5 flex items-center justify-between'>
              <span className='mr-8 font-bold'>국가</span>
              <div>
                <Input
                  className='placeholder:text-primaryGray-400 h-[46px] w-[300px] rounded border border-[#e5e7eb] text-sm focus-visible:border-[#6EA5FF] focus-visible:ring-[0]'
                  placeholder='국가를 검색해주세요'
                  onChange={(e) => setSeletedCountry(e.target.value)}
                />
                {materialIcon({
                  iconName: 'search',
                  style: 'absolute top-[10px] right-[16px]',
                })}
              </div>
            </div>
            <div className='mb-5 w-full items-center'>
              <span className='mr-8 font-bold'>기간</span>
              <DatePicker
                dateFormat='yyyy.MM.dd'
                selected={startDate}
                selectsRange={true} // 기간 설정 가능하게
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                  setSelectedRadio(null);
                }}
                showDisabledMonthNavigation
                maxDate={new Date()}
                customInput={<DateInput value={''} onClick={undefined} />}
                popperModifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [92, 0],
                    },
                  },
                ]}
              />
              <DateRangeRadioGroup
                selectedRadio={selectedRadio}
                setDateRange={setDateRange}
                setSelectedRadio={setSelectedRadio}
              />
            </div>
            <div className='mb-5 flex items-center'>
              <span className='mr-8 font-bold'>카테고리</span>
              <Select
                options={categoryOption}
                variant='modalCategory'
                initialValue='선택'
                onChange={setSelectedCategory}
              />
            </div>
            <div className='m-auto'>
              <Button
                className='mt-5 px-12'
                shape='full'
                variant='lightblue'
                weight='bold'
                disabled={!(selectedCountry || endDate || selectedCategory)}
                onClick={handleFilterLikeStory}
              >
                검색하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
