'use client';

export const ContentInfo = ({ dayData }) => {
  const { isDayLocationData, isDayDescriptionData } = dayData;

  const emptyData =
    isDayLocationData === false && isDayDescriptionData === false;

  if (emptyData) return;
  return (
    <div className='mb-5'>
      <>
        <div
          className='bg-primaryGray-100 relative mt-3 h-auto w-full rounded-xl py-5 pl-5
             pr-[13px] text-[13px]'
        >
          <div className='black'>
            안녕하세요! 일본을 누비며 맛있는 여행을 즐겨보았어요. 오사카의
            타코야끼, 도쿄의 초밥, 교토의 유자라멘과 함께한 식도락 여행은 정말
            특별했습니다. 현지 음식과 문화의 매력을 느끼며 여행의 색다른 맛을
            만끽할 수 있었어요....
          </div>
        </div>
      </>
    </div>
  );
};
