import { FlagInfo } from '@/components';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';
const OthersPageVisitCountry = () => {
  const bannerData = visitedContriesConfig.tabs.map((tabs) => tabs)[0]
    .continents;

  return (
    <>
      <div className='m-auto mt-[-147px] h-full w-[1024px] border  shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='m-auto mt-[200px] w-[930px]'>
          {bannerData.map((data, index) => (
            <div key={index} className='flex flex-col'>
              <FlagInfo data={data} id={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OthersPageVisitCountry;
