'use client';

import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { openSimpleRecordModalAtom } from '../../store/simpleRecordModal.atom';
import TravelModalDefault from '../ModalDefault/TravelModalDefault';
import ValidatorCalendar from '../ValidatorCalendar/ValiedatorCaleander';
import ValidateSelect from './_components/ValidateSelect/ValidateSelect';

const SimpleRecordModal = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  const [openSimpleRecordModal, setOpenSimpleRecordModal] = useAtom(
    openSimpleRecordModalAtom
  );

  const closeModal = () => setOpenSimpleRecordModal(false);

  return (
    <>
      <TravelModalDefault isOpen={openSimpleRecordModal} onClose={closeModal}>
        <div className='ml-5 text-2xl font-semibold	text-gray-600'>
          간편 기록하기
        </div>
        <p className='text-primaryGreen ml-80 text-sm'>*은 필수 항목입니다.</p>
        <hr className='ml-5 mt-2 w-full max-w-[420px] border border-gray-300' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='relative z-10'>
            <ValidateSelect control={control} />
          </div>
          <div className='text-primaryGray-500 ml-5  mt-7 flex'>
            일자<p className='text-primaryGreen mb-1 ml-1'>*</p>
          </div>
          <ValidatorCalendar control={control} name='date' />
          <div className='mt-14 flex justify-center'>
            <div className='mr-4 mt-[10px] cursor-pointer text-[13px] font-semibold'>
              취소
            </div>
            <Button className='mb-4 ml-4 h-[35px] w-[120px] rounded-sm text-[13px] font-semibold'>
              등록하기
            </Button>
          </div>
        </form>
      </TravelModalDefault>
    </>
  );
};

export default SimpleRecordModal;
