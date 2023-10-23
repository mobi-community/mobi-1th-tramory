'use client';

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { checkBoxAtom, selectedCountryAtom } from '../../../../../store';
import ImageSlider from './_component/ImageSlider';

async function fetchCountries(): Promise<{ countries: string[] }> {
  const response = await fetch('/api/countries');

  if (!response.ok) {
    throw new Error('에러');
  }
  return response.json();
}

const StepSumup = () => {
  const [checked, setChecked] = useAtom(checkBoxAtom);
  const [selectedCountry, setSelectedCountry] = useAtom(selectedCountryAtom);

  const queryOptions: UseQueryOptions<unknown, Error, { countries: string[] }> =
    {
      queryKey: ['countries'],
      queryFn: fetchCountries,
    };

  const {
    data,
    isLoading,
    error,
  }: UseQueryResult<{ countries: string[] }, Error> = useQuery(queryOptions);

  const images = [
    '/images/travel_record_img01.png',
    '/images/travel_record_img02.png',
    '/images/travel_record_img03.png',
    '/images/travel_record_img04.png',
  ];

  const headerHeight = 90;

  if (isLoading) return '로딩중...';
  if (error) return '에러가 발생하였습니다: ' + error;

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
      className='flex min-h-full w-auto flex-col items-center justify-center'
    >
      <div className='bg-primaryBlue-100 min-h-[600px] w-[969px] rounded-2xl pb-[50px] pl-[70px] pr-[70px] pt-[50px]'>
        <div className='flex gap-2'>
          <h2 className='pb-[30px] text-xl font-bold '>
            나만의 여행 기록 남기기
          </h2>
          <span className='material-icons-outlined rotate-45 text-blue-400'>
            send
          </span>
        </div>
        <span>
          즐거운 여행 되셨나요? <br />
          소중한 여행의 추억을 생생하게 기록으로 남겨보세요!
        </span>
        {data && (
          <div className='my-5'>
            <label>
              <select
                value={selectedCountry || ''}
                onChange={handleCountryChange}
                className='rounded px-3 py-2 text-sm'
              >
                <option value=''>
                  총 {data.countries.length}개의 국가를 등록하셨습니다
                </option>
                {data.countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
        <div style={{ width: '100vw' }}>
          <ImageSlider images={images} />
        </div>
        <div className='my-4 flex items-center'>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className='rounded'
          />
          <span
            className={`${
              checked ? 'text-black' : 'text-gray-400'
            } ml-2 rounded`}
          >
            여행 기록 나만보기
          </span>
        </div>
        <div className='flex justify-end'>
          <button className='mt-auto'>저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default StepSumup;
