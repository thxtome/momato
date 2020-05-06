import { toast } from "react-toastify";

const AuthorizationErrorHandler = (errorDetail) => {
  console.log(errorDetail);
  switch (errorDetail.errorCode) {
    case "0001":
      toast.error(`로그인이 되어있지 않거나 유효하지 않은 토큰입니다.`, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export default AuthorizationErrorHandler;
