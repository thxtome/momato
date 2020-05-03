import axios from "axios";
import qs from 'query-string';

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

export const tomato = ({ date }) =>
  axios({
    method: "get",
    url: "http://localhost:8080/tomatos?tomatoDate=2020-05-02",
    // params: qs.stringify({data.date}),
  });

export const tomatoAdd = ({ createType, tomatoName, memberId }) =>
  axios({
    method: "post",
    url: "http://localhost:8080/tomatos",
    data: {
      createType,
      data: {
        tomatoName,
        memberId,
      },
    },
  });
