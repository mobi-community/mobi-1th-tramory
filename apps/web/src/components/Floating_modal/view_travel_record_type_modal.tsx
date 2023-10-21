import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ViewTravelRecordTypeModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className='z-100 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
      <div className='m-auto flex w-96 flex-col rounded-lg border border-gray-300 bg-white p-5 shadow-md'>
        <div className='mb-1 flex justify-end'>
          <button className='h-6 w-6 cursor-pointer' onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default ViewTravelRecordTypeModal;
