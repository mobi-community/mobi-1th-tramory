import { TravelPlanStep1config } from '@/constants';
import { TravelPlanStep2Config } from '@/constants/travelStep2.constants';
import { TravelPlanStep3Config } from '@/constants/travelStep3.constants';
import { TravelPlanStep4Config } from '@/constants/travelStep4.constants';

export interface Step1TitleProps {
  config: TravelPlanStep1config;
}

export interface IStep2Props {
  config: TravelPlanStep2Config;
}

export interface IStep3Props {
  config: TravelPlanStep3Config;
}

export interface IStep4Props {
  config: TravelPlanStep4Config;
}
