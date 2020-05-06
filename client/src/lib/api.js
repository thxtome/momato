import axios from "axios";

export const login = ({ memberId, memberPass }) =>
  axios({
    method: "post",
    url: "http://localhost:8080/members/signin",
    data: {
      memberId,
      memberPass,
    },
  });

export const signup = ({ memberId, memberPass, memberName }) =>
  axios({
    method: "post",
    url: "http://localhost:8080/members",
    data: {
      memberId,
      memberPass,
      memberName,
    },
  });

export const updateMember = ({ memberPass, memberName }) =>
  axios({
    method: "put",
    url: "http://localhost:8080/members",
    headers: { Authorization: localStorage.getItem("auth") },
    data: {
      memberPass,
      memberName,
    },
  });

export const tomato = (date) => {
  // let dateString = date.toISOString().substr(0, 10);
  let dateString = date.toISOString().substr(0, 10);
  return axios({
    method: "get",
    headers: { Authorization: localStorage.getItem("auth") },
    url: `http://localhost:8080/tomatos?tomatoDate=${dateString}`,
  });
};

export const tomatoAdd = ({ createType, tomatoName }) =>
  axios({
    method: "post",
    url: "http://localhost:8080/tomatos",
    headers: { Authorization: localStorage.getItem("auth") },
    data: {
      createType,
      data: {
        tomatoName,
      },
    },
  });

export const tomatoEdit = ({
  tomatoIdx,
  tomatoName,
  tomatoFullRegular,
  tomatoFullBreak,
}) =>
  axios({
    method: "put",
    url: "http://localhost:8080/tomatos",
    headers: { Authorization: localStorage.getItem("auth") },
    data: {
      tomatoIdx,
      tomatoName,
      tomatoFullRegular,
      tomatoFullBreak,
    },
  });

export const tomatoDelete = (tomatoIdx) =>
  axios({
    method: "delete",
    url: `http://localhost:8080/tomatos/${tomatoIdx}`,
    headers: { Authorization: localStorage.getItem("auth") },
  });

export const getCalendar = ({ year, month }) =>
  axios({
    method: "get",
    url: `http://localhost:8080/calendar?year=${year}&month=${month}`,
    headers: { Authorization: localStorage.getItem("auth") },
  });
