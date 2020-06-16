import { toast } from 'react-toastify';

const FindPassErrorHandler = errorDetail => {
  console.log(errorDetail);
  switch (errorDetail.errorCode) {
    case '0001':
      toast.error('잘못된 주소입니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case '0002':
      toast.error('이메일을 찾을 수 없습니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export default FindPassErrorHandler;
