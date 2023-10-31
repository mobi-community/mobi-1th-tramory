import { InquiryMockData } from '../../_mock/InquiryMocks';

type InquiryData = (typeof InquiryMockData)[0];

export type InquiryDataProps = {
  data: InquiryData;
};
