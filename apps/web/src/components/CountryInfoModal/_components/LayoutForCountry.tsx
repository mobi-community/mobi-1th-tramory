import { Button } from 'ui';

export const LayoutForCountry: React.FC = () => {
  return (
    <div>
      <div>
        <div>영문 국가명</div>
        <div>국문 국가명</div>
      </div>
      <div className='flex'>
        <div>국기 이미지</div>
        <div>여행 이력</div>
      </div>
      <div>지도</div>
      <Button>국가명 스토리 보러가기</Button>
    </div>
  );
};
