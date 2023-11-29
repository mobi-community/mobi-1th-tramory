import { PropsWithChildren } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TravelModalDefault = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;

  return (
    <div className='fixed left-0 top-0 z-[200] flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
      <div className='m-auto flex flex-col rounded-lg border border-gray-300 bg-white px-5 pb-8 shadow-md'>
        <div className='mb-1 flex justify-end'>
          <button className='mt-3 h-6 w-6 cursor-pointer' onClick={onClose}>
            <span className='material-icons-outlined'>close</span>
          </button>
        </div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default TravelModalDefault;
