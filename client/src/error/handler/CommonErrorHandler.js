import { toast } from 'react-toastify';

const CommonErrorHandler = errorDetail => {
  switch (errorDetail.errorCode) {
    case '0001':
      toast.error('인터넷 연결 오류입니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case '0002':
      toast.error(`소켓 연결 오류입니다.`, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export default CommonErrorHandler;
