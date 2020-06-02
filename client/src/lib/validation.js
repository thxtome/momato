import validator from "validator"
import { toast } from "react-toastify"

const isEmail = (value) => {
  if (!validator.isEmail(value)) {
    toast.info("이메일 형식에 맞지 않습니다.", {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return validator.isEmail(value)
}

const required = (value, type) => {
  let lastChar = type.charCodeAt(type.length - 1)
  type += (lastChar - 0xac00) % 28 > 0 ? "을" : "를"

  if (validator.isEmpty(value)) {
    toast.info(`${type} 입력해주세요.`, {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return !validator.isEmpty(value)
}

const checkPass = (value, comparison) => {
  if (!validator.equals(value, comparison)) {
    toast.info("비밀번호가 일치하지 않습니다.", {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return validator.equals(value, comparison)
}

export { isEmail, required, checkPass }
