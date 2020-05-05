import LoginErrorHandler from "./handler/LoginErrorHandler";

const dispachError = (errorDetail) => {
  switch (errorDetail.category) {
    case "Login":
      LoginErrorHandler(errorDetail);
      break;

    default:
      break;
  }
};

export default dispachError;
