'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from 'ui';

import { Line } from '@/components';
import { placeInfoStateData } from '@/components/PlaceInfo/_mock/placeInfoMock';
import { detailPageConfig } from '@/constants/detailPage.constans';

import {
  DetailCardSection,
  DropdownFormSection,
  MapSections,
  SlideImages,
  UserProfileSection,
} from './_components';
import { useStoryDetailPage } from './_hooks/useStoryDetailPage';

const StoryDetail = () => {
  const { postId } = useParams();
  const { allToggleAction, targetStory, setTargetStory, setViewedStatus } =
    useStoryDetailPage(postId as string);

  useEffect(() => {
    try {
      fetch(`/story/detail/${postId + ''}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setTargetStory(data.data);
          setViewedStatus(data.data.content.viewed);
        });
    } catch (error) {
      console.error(error, '스토리 데이터를 불러오는 데 실패하였습니다.🥲');
    }
  }, [postId, setTargetStory, setViewedStatus]);

  useEffect(() => {
    const handlePatchViewedStatus = async () => {
      try {
        const response = await fetch('/story/detail/viewed', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ storyId: postId }),
        });

        const res = await response.json();

        console.log('res', res.data);
      } catch (error) {
        console.error('조회수 정보를 전달하는 데 실패했습니다🥲', error);
      }
    };

    handlePatchViewedStatus();
  }, []);

  if (!targetStory)
    return (
      <div className='relative m-auto flex w-[60vw] flex-col items-center justify-center p-20'>
        데이터를 로딩 중입니다...
      </div>
    );

  if (targetStory.content) {
    return (
      <div className='relative m-auto flex w-[60vw] flex-col items-center justify-center p-20'>
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
        <Link
          className='mt-10 flex w-full items-center justify-center gap-6'
          href={'/story_community'}
        >
          <Button
            size='xsm'
            className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryBlue-200 hover:border-primaryBlue-200 hover:text-primaryGray-500  h-[40px] w-[145px] rounded-3xl border-opacity-40 font-bold '
            variant='roundednavy'
          >
            목록보기
          </Button>
        </Link>
      </div>
    );
  }
};

export default StoryDetail;
