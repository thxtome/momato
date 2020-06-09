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
  } else if (error.message === "Socket Connection Error") {
    return {
      category: "Common",
      errorCode: "0002",
      errorMessage: "Socket Connection Error",
      referedUrl: "tomatoTimer",
    };
  }
};

export default customError;
