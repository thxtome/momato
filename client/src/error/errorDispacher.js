import LoginErrorHandler from "./handler/LoginErrorHandler";
import FindPassErrorHandler from "./handler/FindPassErrorHandler";
import AuthorizationErrorHandler from "./handler/AuthorizationErrorHandler";

const dispachError = (errorDetail) => {
  switch (errorDetail.category) {
    case "Authorization":
      AuthorizationErrorHandler(errorDetail);
      break;
    case "Login":
      LoginErrorHandler(errorDetail);
      break;
    case "findPass":
      FindPassErrorHandler(errorDetail);
      break;

    default:
      break;
  }
};

export default dispachError;
