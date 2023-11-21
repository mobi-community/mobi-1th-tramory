// plan post fetch 요청 로직
import { TravelPlanType, TravelRecordType } from '@/types/TravelRegister.types';

export const postPlan = async (formdata: TravelPlanType) => {
  await fetch('/api/plans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formdata),
  })
    .then(async (res) => {
      if (res.status === 200) {
        localStorage.removeItem('formPlanAtom');
        return res;
      } else if (res.status === 403) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('네트워크 에러', error);
    });
};

// record post fetch 요청 로직
export const postRecord = async (formdata: TravelRecordType) => {
  await fetch('/api/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formdata),
  })
    .then((res) => {
      if (res.status === 200) {
        // alert('post 요청 성공');
        localStorage.removeItem('formRecordAtom'); // formAtom 데이터 삭제할 때 사용
      } else if (res.status === 403) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('네트워크 에러', error);
    });
};
