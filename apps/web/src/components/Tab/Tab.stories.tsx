import { Tab } from './Tab';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const SelectedTab = {
  args: {
    children: 'Selected Tab',
    bgColor: 'white',
    zIndex: 10,
  },
};

export const NonSelectedTab = {
  args: {
    children: 'NonSelect Tab',
    bgColor: 'primaryGray-200',
    zIndex: 10,
  },
};
