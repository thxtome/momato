import LoginErrorHandler from "./handler/LoginErrorHandler";
import AuthorizationErrorHandler from "./handler/AuthorizationErrorHandler";

const dispachError = (errorDetail) => {
  switch (errorDetail.category) {
    case "Login":
      LoginErrorHandler(errorDetail);
      break;
    case "Authorization":
      AuthorizationErrorHandler(errorDetail);
      break;

    default:
      break;
  }
};

export default dispachError;
