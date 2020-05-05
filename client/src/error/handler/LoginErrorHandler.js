import { toast } from "react-toastify";

const LoginErrorHandler = (errorDetail) => {
  console.log(errorDetail);
  switch (errorDetail.errorCode) {
    case "0001":
      toast.error("아이디를 찾을 수 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
      break;

    case "0002":
      toast.error("비밀번호가 일치하지 않습니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
      break;

    case "0003":
      toast.error("올바르지 않은 양식입니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
  }
};

export default LoginErrorHandler;
