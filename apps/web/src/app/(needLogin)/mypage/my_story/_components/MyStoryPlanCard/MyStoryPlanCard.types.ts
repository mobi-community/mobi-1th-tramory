export interface MyStoryPlanCardProps {
  planData: PlanDataType;
}

export interface PlanDataType {
  title: string;
  location: string;
  date: string;
  isRecord: boolean;
}
