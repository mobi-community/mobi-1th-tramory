import React from 'react';

import StepNavbar from './_components/StepNavBar/StepNavBar';

// travel 관련 페이지에서 import해서 사용 가능
interface TravelLayoutProps {
  children: React.ReactNode;
}

const TravelLayout: React.FC<TravelLayoutProps> = ({ children }) => {
  return (
    <>
      <StepNavbar />
      {children}
    </>
  );
};

export default TravelLayout;
