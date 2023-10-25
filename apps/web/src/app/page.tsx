'use client';

import { Button } from 'ui';

import FloatingMenu from '../components/Floating_menu/FloatingMenu';
import SimpleRecordModal from '../components/SimpleRecordModal/SimpleRecordModal';
import TravelModal from './(needLogin)/travel/_components/TravelModal/TravelModal';
import TravelModalDefault from '@/components/ModalDefault/TravelModalDefault';
import { useState } from 'react';

const buttonVariants = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const;

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative mt-8 items-center space-y-4'>
      <div className='flex w-full justify-center text-3xl font-bold'>
        Welcome to Next 13
      </div>
      <div className='flex w-full justify-center space-x-4'>
        <ul className='items-center space-y-1 md:inline-flex md:space-x-1 md:space-y-0'>
          {buttonVariants.map((variant) => (
            <li key={variant}>
              <Button variant={variant} className='capitalize'>
                {variant}
              </Button>
            </li>
          ))}
        </ul>
        <FloatingMenu />
        {/* 임시!  */}
        <div>
          <button
            className='rounded bg-gray-200'
            onClick={() => setIsModalOpen(true)}
          >
            모달 상세기록 열기
          </button>

          <TravelModalDefault
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <TravelModal />
          </TravelModalDefault>
        </div>
      </div>
      <SimpleRecordModal />
    </div>
  );
}
