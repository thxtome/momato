const customError = (error) => {
  if (error.response) {
    return { ...error.response.data.error };
  } else if (error.message === "Network Error") {
    return {
      category: "Common",
      errorCode: "0001",
      errorMessage: "Network Error",
      referedUrl: error.config.url,
    };
  }
};

export default customError;
