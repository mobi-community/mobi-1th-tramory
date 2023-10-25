export interface TabProps {
  children: string;
  handleClickTab?: (page: string) => void;
  page?: string;
  bgColor: string;
  zIndex: string;
}
