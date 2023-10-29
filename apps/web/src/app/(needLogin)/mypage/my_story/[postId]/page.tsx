'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Button } from 'ui';

import { Line } from '@/components';
import { detailPageConfig } from '@/constants/detailPage.constans';

import {
  DetailCardSection,
  DropdownFormSection,
  MapSections,
  SlideImages,
  UserProfileSection,
} from '../../_components';
import { planDescription } from '../_mocks';
import { placeInfoStateData } from '@/components/PlaceInfo/_mock/placeInfoMock';
import { useSetAtom } from 'jotai';
import { toggleAllDropdownsAtom } from '@/store/dropdownFormSection.atoms';

const MyStoryPlanDetailPage = () => {
  const { postId } = useParams();
  const router = useRouter();
  const params = useSearchParams();
  const page = params.get('page');
  const isEdit = params.get('isEdit');
  const allToggleAction = useSetAtom(toggleAllDropdownsAtom);

  const handleMoveToDetail = () => {
    if (isEdit === 'true') {
      router.push(`/mypage/my_story/${postId}?page=record`);
    } else {
      router.push(`/mypage/my_story/${postId}?page=record&isEdit=true`);
    }
  };

  const isPlanPage = page === 'plan';
  const planDetail = planDescription.filter((detail) => detail.id === postId);

  return (
    <div className='ml-16 flex w-[60vw] flex-col items-center justify-center p-20'>
      <UserProfileSection planDetail={planDetail[0]} />
      <Line />
      <DetailCardSection planDetail={planDetail[0]} />
      <div className='mt-4 flex w-full justify-start gap-4'>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
          onClick={() => {
            allToggleAction('open');
          }}
        >
          {isPlanPage ? '계획' : '기록'} {detailPageConfig.buttons[0]}
        </Button>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
          onClick={() => {
            allToggleAction('close');
          }}
        >
          {isPlanPage ? '계획' : '기록'} {detailPageConfig.buttons[1]}
        </Button>
      </div>
      <MapSections />
      <SlideImages />
      {placeInfoStateData.map((dayData, index) => (
        <DropdownFormSection key={index} dayData={dayData} index={index} />
      ))}
      <div className='mt-10 flex w-full items-center justify-center gap-6'>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryBlue-200 hover:border-primaryBlue-200 hover:text-primaryGray-500  h-[40px] w-[145px] rounded-3xl border-opacity-40 font-bold '
          variant='roundednavy'
        >
          목록보기
        </Button>
        <Button
          onClick={handleMoveToDetail}
          size='xsm'
          className=' border-primaryGray-500 hover:bg-primaryBlue-200 hover:border-primaryBlue-200 hover:text-primaryGray-500 h-[40px] w-[145px] rounded-3xl border-opacity-40 font-bold text-white'
          variant='defaultnavy'
        >
          {isEdit ? '저장하기' : '수정하기'}
        </Button>
      </div>
    </div>
  );
};

export default MyStoryPlanDetailPage;
