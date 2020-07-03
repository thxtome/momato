import { toast } from 'react-toastify';

const FindPassErrorHandler = errorDetail => {
  switch (errorDetail.errorCode) {
    case '0001':
      toast.error('이미 존재하는 아이디입니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export default FindPassErrorHandler;
