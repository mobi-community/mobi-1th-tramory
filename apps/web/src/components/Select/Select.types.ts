export type SelectType = {
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  options: string[];
  initialValue?: string;
  variant?: 'service' | 'mypageCategory' | 'modalCategory';
};
