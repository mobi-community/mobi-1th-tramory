export interface MyStoryPlanCardProps {
  planData: PlanDataType;
  // eslint-disable-next-line no-unused-vars
  handleMoveToDetail: (id: any) => void;
}

export interface PlanDataType {
  id: string;
  title: string;
  location: string;
  date: string;
  isRecord?: boolean;
}
