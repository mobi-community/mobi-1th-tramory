import Image from 'next/image';

/**
 *
 * @todo
 * 배지 발급 개수 부분 현재 0으로 하드코딩 되어있음
 * 추후 개발 시 발급된 배지 개수로 수정 예정
 * 구글 아이콘 추후 util 컴포넌트로 수정 예정
 */
export const OneBadgeSlide = ({ item, badgeDefault, defaultMessage }) => {
  const { title, description } = item;
  // const badgeArray = Array.from({ length: description.length }).fill(null);

  return (
    <div>
      <div className='my-8 flex items-center'>
        <p className='text-primaryBlue-700 mr-2 text-2xl font-bold'>
          {title} (0/{description.length})
        </p>
        <span
          className='material-icons-outlined'
          style={{ color: '#70D1E6', cursor: 'pointer' }}
        >
          info
        </span>
      </div>
      <div className='bg-primaryGray-200 flex items-center rounded-[30px] px-8 py-16'>
        <span
          className='material-icons-outlined text-primaryGray-200 mr-16 rounded-full bg-white p-3'
          style={{ fontSize: '36px' }}
        >
          arrow_back_ios
        </span>
        <div className='flex'>
          {description.map((desc, i: number) => (
            <div key={i} className='relative mr-16'>
              <Image
                src={badgeDefault}
                width={126}
                height={152}
                alt='배지 디폴트 이미지'
                className='relative'
              />
              <div className='text-primaryGray-300 absolute left-2/4 top-[40px] w-full -translate-x-2/4 text-center font-bold'>
                <h1
                  className='text-sm '
                  dangerouslySetInnerHTML={{ __html: defaultMessage }}
                />
                {/* 배지 발급 받았을 때, css 수정해야함
                <h1
                  className='text-sm '
                  dangerouslySetInnerHTML={{ __html: desc.title }}
                />
                <p
                  className='text-xs'
                  dangerouslySetInnerHTML={{ __html: desc.subtitle || null }}
                /> */}
              </div>
            </div>
          ))}
        </div>
        <span
          className='material-icons-outlined text-primaryGray-200 rounded-full bg-white p-3'
          style={{ fontSize: '36px' }}
        >
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
};
