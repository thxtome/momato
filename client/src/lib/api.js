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

export const logout = (auth) =>
  axios({
    method: "get",
    url: "http://localhost:8080/members/logout",
    headers: { Authorization: auth },
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

export const getMemberInfo = () =>
  axios({
    method: "get",
    url: "http://localhost:8080/members",
    headers: { Authorization: localStorage.getItem("auth") },
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

export const getTomato = (data) => {
  return axios({
    method: "get",
    headers: { Authorization: localStorage.getItem("auth") },
    url: `http://localhost:8080/tomatos?tomatoDate=${data.date}&templateIdx=${data.templateIdx}`,
  });
};

export const tomatoAdd = ({ createType, tomatoName, templateIdx }) =>
  axios({
    method: "post",
    url: "http://localhost:8080/tomatos",
    headers: { Authorization: localStorage.getItem("auth") },
    data: {
      createType,
      data: {
        tomatoName,
        templateIdx,
      },
    },
  });

export const tomatoEdit = ({
  tomatoIdx,
  tomatoName,
  tomatoFullRegular,
  tomatoFullBreak,
  tomatoCanStart,
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
      tomatoCanStart,
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

export const template = () => {
  return axios({
    method: "get",
    url: `http://localhost:8080/templates`,
    headers: { Authorization: localStorage.getItem("auth") },
  });
};

export const templateAdd = ({ templateName, templateComment }) =>
  axios({
    method: "post",
    url: "http://localhost:8080/templates",
    headers: { Authorization: localStorage.getItem("auth") },
    data: {
      templateName,
      templateComment,
    },
  });

export const updateTemplate = ({
  templateIdx,
  templateName,
  templateComment,
}) =>
  axios({
    method: "put",
    url: "http://localhost:8080/templates",
    headers: { Authorization: localStorage.getItem("auth") },
    data: {
      templateIdx,
      templateName,
      templateComment,
    },
  });

export const removeTemplate = (templateIdx) =>
  axios({
    method: "delete",
    url: `http://localhost:8080/templates/${templateIdx}`,
    headers: { Authorization: localStorage.getItem("auth") },
  });
