/* eslint-disable no-unused-vars */
import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

// atomFamily는 아톰 자체를 생성하는 것이 아닌, 아톰을 생성할 수 있는 기능을 가진 함수를 생성하는 것이다.
export const stepNavbarAtomFamily = atomFamily((id) => atom(false));

export const getStepBarAtom = (stepId) => {
  return stepNavbarAtomFamily(`atom${stepId}`);
};
