import LoginErrorHandler from "./handler/LoginErrorHandler";
import CommonErrorHandler from "./handler/CommonErrorHandler";
import FindPassErrorHandler from "./handler/FindPassErrorHandler";
import AuthorizationErrorHandler from "./handler/AuthorizationErrorHandler";
import customError from "./customError";

const dispachError = (error) => {
  const errorDetail = customError(error);
  switch (errorDetail.category) {
    case "Authorization":
      AuthorizationErrorHandler(errorDetail);
      break;
    case "Login":
      LoginErrorHandler(errorDetail);
      break;
    case "FindPass":
      FindPassErrorHandler(errorDetail);
      break;
    case "Common":
      CommonErrorHandler(errorDetail);
      break;

    default:
      break;
  }
};

export default dispachError;
