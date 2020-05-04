import LoginErrorHandler from "./handler/loginHandler";

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
