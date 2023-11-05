// plan post fetch 요청 로직
// formModeAtom에 타입이 있어야함
export const postPlan = async (formdata) => {
  await fetch('/api/plans', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formdata),
  })
    .then((res) => {
      if (res.status === 200) {
        alert('post 요청 성공');
        localStorage.removeItem('formAtom'); // formAtom 데이터 삭제할 때 사용
      } else if (res.status === 403) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('네트워크 에러', error);
    });
};

// record post fetch 요청 로직
export const postRecord = async (formdata) => {
  await fetch('/api/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formdata),
  })
    .then((res) => {
      if (res.status === 200) {
        alert('post 요청 성공');
        localStorage.removeItem('formAtom'); // formAtom 데이터 삭제할 때 사용
      } else if (res.status === 403) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('네트워크 에러', error);
    });
};
