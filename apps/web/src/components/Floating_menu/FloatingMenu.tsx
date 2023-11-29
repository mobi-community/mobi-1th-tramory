'use client';

import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { hoveredAtom, isModalOpenAtom, isMountedAtom } from '../../store';
import ViewTravelRecordType from '../Floating_modal/TravelRecordSelect';
import TravelModal from '../ModalDefault/TravelModalDefault';
import type { FloatingMenuProps } from './FloatingMenuProps.types';

const FloatingMenu: React.FC<FloatingMenuProps> = ({ travelPlan }) => {
  const [isMounted, setIsMounted] = useAtom(isMountedAtom);
  const [hovered, setHovered] = useAtom(hoveredAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) {
    return null;
  }

  const toTravelPlan =
    travelPlan || (() => router.push('/travel/plan?stepId=1'));

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='fixed bottom-0 right-0 z-[100] p-5'>
      <div className='space-y-2 rounded-[50px] border bg-gray-200 bg-opacity-50 p-2 py-3'>
        <div className='group relative'>
          <button
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg focus:outline-none'
            onClick={toTravelPlan}
            onMouseEnter={() => setHovered('계획하기')}
            onMouseLeave={() => setHovered('')}
          >
            <span className='material-icons-outlined'>calendar_month</span>
          </button>
          {hovered === '계획하기' && (
            <div className='absolute -left-28 top-1 w-24 rounded-lg bg-gray-500 p-3 text-center text-sm font-bold text-white'>
              계획하기
            </div>
          )}
        </div>

        <div className='group relative'>
          <button
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg focus:outline-none'
            onClick={openModal}
            onMouseEnter={() => setHovered('기록하기')}
            onMouseLeave={() => setHovered('')}
          >
            <span className='material-icons-outlined'>edit</span>
          </button>
          {hovered === '기록하기' && (
            <div className='text-bold absolute  -left-28 top-2 w-24 rounded-lg bg-gray-500 p-3 text-center text-sm font-bold text-white'>
              기록하기
            </div>
          )}
        </div>
      </div>
      <TravelModal isOpen={isModalOpen} onClose={closeModal}>
        <ViewTravelRecordType closeModal={closeModal} />
      </TravelModal>
    </div>
  );
};

export default FloatingMenu;
