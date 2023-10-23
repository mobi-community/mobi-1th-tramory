'use client';

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { checkBoxAtom } from '../../../../../store';
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

  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

  const headerHeight = 90;

  if (isLoading) return '로딩중...';
  if (error) return '에러가 발생하였습니다: ' + error;

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
          <div className='my-4'>
            총 {data.countries.length}개의 국가를 등록하셨습니다
            <ul>
              {data.countries.map((country, index) => (
                <li key={index}>{country}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <ImageSlider images={images} />
        </div>
        <div className='my-4 flex items-center'>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className={`${checked ? 'text-black' : 'text-gray-500'} rounded`}
          />
          <span className='ml-2'>여행 기록 나만보기</span>
        </div>
        <div className='flex justify-end'>
          <button className='mt-auto'>저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default StepSumup;
