import axios from "axios";

export const login = (id, pass) =>
  axios({
    method: "post",
    url: "http://localhost:8080/members/signin",
    data: {
      memberId: "thxtome531@gmail.com",
      memberPass: "1111",
    },
  });
