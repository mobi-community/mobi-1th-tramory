'use client';

import { useSetAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { Button } from 'ui';

import { Line } from '@/components';
import { placeInfoStateData } from '@/components/PlaceInfo/_mock/placeInfoMock';
import { detailPageConfig } from '@/constants/detailPage.constans';
import { toggleAllDropdownsAtom } from '@/store/dropdownFormSection.atoms';

import { storyMock } from '../_mocks';
import {
  DetailCardSection,
  DropdownFormSection,
  MapSections,
  SlideImages,
  UserProfileSection,
} from './_components';

const StoryDetail = () => {
  const { postId } = useParams();
  const allToggleAction = useSetAtom(toggleAllDropdownsAtom);

  const targetStory = storyMock.find((detail) => detail.id + '' === postId);

  console.log(targetStory);

  return (
    <div className='ml-16 flex w-[60vw] flex-col items-center justify-center p-20'>
      <UserProfileSection targetStory={targetStory} />
      <Line />
      <DetailCardSection targetStory={targetStory} />
      <div className='mt-4 flex w-full justify-start gap-4'>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
          onClick={() => {
            allToggleAction('open');
          }}
        >
          기록 {detailPageConfig.buttons[0]}
        </Button>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
          onClick={() => {
            allToggleAction('close');
          }}
        >
          기록 {detailPageConfig.buttons[1]}
        </Button>
      </div>
      <MapSections />
      <SlideImages targetStory={targetStory} />
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
      </div>
    </div>
  );
};

export default StoryDetail;
