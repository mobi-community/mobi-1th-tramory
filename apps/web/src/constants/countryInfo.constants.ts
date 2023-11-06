// colored
import africaStamp from '/public/assets/passport_stamp/colored/passport_stamp01.png';
import asiaStamp from '/public/assets/passport_stamp/colored/passport_stamp02.png';
import europeStamp from '/public/assets/passport_stamp/colored/passport_stamp03.png';
import northAmericaStamp from '/public/assets/passport_stamp/colored/passport_stamp04.png';
import southAmericaStamp from '/public/assets/passport_stamp/colored/passport_stamp05.png';
import oceaniaStamp from '/public/assets/passport_stamp/colored/passport_stamp06.png';
// eslint-disable-next-line camelcase
import G_africaStamp from '/public/assets/passport_stamp/gray_scale/n_passport_stamp01.png';
// eslint-disable-next-line camelcase
import G_asiaStamp from '/public/assets/passport_stamp/gray_scale/n_passport_stamp02.png';
// eslint-disable-next-line camelcase
import G_europeStamp from '/public/assets/passport_stamp/gray_scale/n_passport_stamp03.png';
// eslint-disable-next-line camelcase
import G_northAmericaStamp from '/public/assets/passport_stamp/gray_scale/n_passport_stamp04.png';
// eslint-disable-next-line camelcase
import G_southAmericaStamp from '/public/assets/passport_stamp/gray_scale/n_passport_stamp05.png';
// eslint-disable-next-line camelcase
import G_oceaniaStamp from '/public/assets/passport_stamp/gray_scale/n_passport_stamp06.png';

// @ TODO: DB에 저장된 대륙명의 형태로 수정 예정
export const CountryInfoConfig = {
  stamp: {
    africaStamp,
    asiaStamp,
    europeStamp,
    northAmericaStamp,
    southAmericaStamp,
    oceaniaStamp,
    // eslint-disable-next-line camelcase
    G_africaStamp,
    // eslint-disable-next-line camelcase
    G_asiaStamp,
    // eslint-disable-next-line camelcase
    G_europeStamp,
    // eslint-disable-next-line camelcase
    G_northAmericaStamp,
    // eslint-disable-next-line camelcase
    G_southAmericaStamp,
    // eslint-disable-next-line camelcase
    G_oceaniaStamp,
  },
  text: {
    community: '스토리 보러가기',
    record: '기록 남기기',
    passport: 'passport',
    notHaveRecord: '이곳을 여행하신 적이 있나요?',
  },
};
