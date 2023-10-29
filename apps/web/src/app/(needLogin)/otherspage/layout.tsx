import OthersPageContainer from './_components/OthersPageContainer/OthersPageContainer';
import OtherStoryTab from './_components/OthersStoryTab/OthersStoryTab';

interface OthersPageLayoutType {
  children: React.ReactNode;
}

const OthersPageLayout: React.FC<OthersPageLayoutType> = ({ children }) => {
  return (
    <>
      <div>
        <div>
          <OthersPageContainer />
          <OtherStoryTab />
          {children}
        </div>
      </div>
    </>
  );
};

export default OthersPageLayout;
