import validator from 'validator';
import { toast } from 'react-toastify';

const isEmail = value => {
  if (!validator.isEmail(value)) {
    toast.info('이메일 형식에 맞지 않습니다.', {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  }
  return true;
};

const required = (value, type) => {
  if (validator.isEmpty(value)) {
    let lastChar = type.charCodeAt(type.length - 1);
    type += (lastChar - 0xac00) % 28 > 0 ? '을' : '를';
    toast.info(`${type} 입력해주세요.`, {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  }
  return true;
};

const checkPass = (value, type) => {
  const reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  // 회원정보 수정시 비밀번호 미입력이여도 유효성 통과
  if (type === 'edit' && value === '') {
    return true;
  } else if (!reg.test(value)) {
    toast.info('비밀번호는 8자 이상, 영문/숫자/특수문자를 포함해야 합니다.', {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  }
  return true;
};
const comparePass = (value, comparison) => {
  if (!validator.equals(value, comparison)) {
    toast.info('비밀번호가 일치하지 않습니다.', {
      position: toast.POSITION.TOP_CENTER,
    });
    return false;
  }
  return true;
};

export { isEmail, required, comparePass, checkPass };
