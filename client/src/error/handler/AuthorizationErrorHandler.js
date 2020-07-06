import { toast } from 'react-toastify';

const AuthorizationErrorHandler = errorDetail => {
  switch (errorDetail.errorCode) {
    case '0001':
      // 토큰 기간이 지나면 localStorage에 저장된 토큰 삭제
      localStorage.removeItem('auth');
      // toast.error(`로그인이 되어있지 않거나 유효하지 않은 토큰입니다.`, {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      break;
  }
};

export default AuthorizationErrorHandler;
