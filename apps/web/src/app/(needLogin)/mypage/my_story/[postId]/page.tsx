'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from 'ui';

import { Line } from '@/components';
import { placeInfoStateData } from '@/components/PlaceInfo/_mock/placeInfoMock';
import { detailPageConfig } from '@/constants/detailPage.constans';
import { toggleAllDropdownsAtom } from '@/store/dropdownFormSection.atoms';
import { userStoryDetailsAtom } from '@/store/mypage.atoms';

import {
  DetailCardSection,
  DropdownFormSection,
  MapSections,
  SlideImages,
  UserProfileSection,
} from '../../_components';

const MyStoryPlanDetailPage = () => {
  const router = useRouter();
  const { postId } = useParams();
  const params = useSearchParams();
  const page = params.get('page');

  const allToggleAction = useSetAtom(toggleAllDropdownsAtom);
  const [storyDetail, setStoryDetail] = useAtom(userStoryDetailsAtom);

  useEffect(() => {
    const fetchUserPlanStoryDetails = async () => {
      try {
        const response = await fetch(`/user/my_story/${page}/${postId}`);

        const data = await response.json();

        if (response.ok) {
          setStoryDetail(data.data);
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 에러가 발생했습니다:', error);
      }
    };

    fetchUserPlanStoryDetails();
    // eslint fix
  }, [page, postId, setStoryDetail]);

  const handleMoveToPage = (path) => {
    if (path === 'list') {
      router.push(`/mypage/my_story/${page}`);
    } else {
      router.push(`/travel/${page}?stepId=0`);
    }
  };

  const isPlanPage = page === 'plan';

  const ToggleButtons = (
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
  );

  const MoveToButtons = (
    <div className='mt-10 flex w-full items-center justify-center gap-6'>
      <Button
        size='xsm'
        className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryBlue-200 hover:border-primaryBlue-200 hover:text-primaryGray-500  h-[40px] w-[145px] rounded-3xl border-opacity-40 font-bold '
        variant='roundednavy'
        onClick={() => {
          handleMoveToPage('list');
        }}
      >
        목록보기
      </Button>
      <Button
        size='xsm'
        className=' border-primaryGray-500 hover:bg-primaryBlue-200 hover:border-primaryBlue-200 hover:text-primaryGray-500 h-[40px] w-[145px] rounded-3xl border-opacity-40 font-bold text-white'
        variant='defaultnavy'
        onClick={() => {
          handleMoveToPage('edit');
        }}
      >
        수정하기
      </Button>
    </div>
  );

  return (
    <div className='ml-16 flex w-[60vw] flex-col items-center justify-center p-20'>
      <UserProfileSection storyDetail={storyDetail} />
      <Line />
      <DetailCardSection storyDetail={storyDetail} />
      {ToggleButtons}
      <MapSections />
      <div className='w-full'>
        {isPlanPage ? null : <SlideImages storyDetail={storyDetail} />}
      </div>
      {placeInfoStateData.map((dayData, index) => (
        <DropdownFormSection key={index} dayData={dayData} index={index} />
      ))}
      {MoveToButtons}
    </div>
  );
};

export default MyStoryPlanDetailPage;
