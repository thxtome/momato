import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? 'https://www.momato.net:8000' : 'http://localhost:8080';

export const login = ({ memberId, memberPass }) =>
  axios({
    method: 'post',
    url: `${url}/members/signin`,
    data: {
      memberId,
      memberPass,
    },
  });

export const logout = auth =>
  axios({
    method: 'get',
    url: `${url}/members/logout`,
    headers: { Authorization: auth },
  });

export const signup = ({ memberId, memberPass, memberName }) =>
  axios({
    method: 'post',
    url: `${url}/members`,
    data: {
      memberId,
      memberPass,
      memberName,
    },
  });

export const getMemberInfo = () =>
  axios({
    method: 'get',
    url: `${url}/members`,
    headers: { Authorization: localStorage.getItem('auth') },
  });

export const updateMember = ({ memberPass, memberName }) =>
  axios({
    method: 'put',
    url: `${url}/members`,
    headers: { Authorization: localStorage.getItem('auth') },
    data: {
      memberPass,
      memberName,
    },
  });

export const findPass = memberId =>
  axios({
    method: 'get',
    url: `${url}/members/tempPass?memberId=${memberId}`,
  });

export const withdraw = () =>
  axios({
    method: 'delete',
    headers: { Authorization: localStorage.getItem('auth') },
    url: `${url}/members`,
  });

export const getTomato = data => {
  return axios({
    method: 'get',
    headers: { Authorization: localStorage.getItem('auth') },
    url: `${url}/tomatos?tomatoDate=${data.date}&templateIdx=${data.templateIdx ? data.templateIdx : ''}`,
  });
};

export const addTomato = ({ createType, tomatoName, templateIdx }) =>
  axios({
    method: 'post',
    url: `${url}/tomatos`,
    headers: { Authorization: localStorage.getItem('auth') },
    data: {
      createType,
      data: {
        tomatoName,
        templateIdx,
      },
      templateIdx,
    },
  });

export const editTomato = ({ tomatoIdx, tomatoName, tomatoFullRegular, tomatoFullBreak, tomatoCanStart }) =>
  axios({
    method: 'put',
    url: `${url}/tomatos`,
    headers: { Authorization: localStorage.getItem('auth') },
    data: {
      tomatoIdx,
      tomatoName,
      tomatoFullRegular,
      tomatoFullBreak,
      tomatoLeftRegular: tomatoFullRegular,
      tomatoLeftBreak: tomatoFullBreak,
      tomatoCanStart,
    },
  });

export const deleteTomato = tomatoIdx =>
  axios({
    method: 'delete',
    url: `${url}/tomatos/${tomatoIdx}`,
    headers: { Authorization: localStorage.getItem('auth') },
  });

export const getCalendar = ({ year, month }) =>
  axios({
    method: 'get',
    url: `${url}/calendar?year=${year}&month=${month}`,
    headers: { Authorization: localStorage.getItem('auth') },
  });

export const getTemplate = () => {
  return axios({
    method: 'get',
    url: `${url}/templates`,
    headers: { Authorization: localStorage.getItem('auth') },
  });
};

export const addTemplate = ({ templateName, templateComment }) =>
  axios({
    method: 'post',
    url: `${url}/templates`,
    headers: { Authorization: localStorage.getItem('auth') },
    data: {
      templateName,
      templateComment,
    },
  });

export const updateTemplate = ({ templateIdx, templateName, templateComment }) =>
  axios({
    method: 'put',
    url: `${url}/templates`,
    headers: { Authorization: localStorage.getItem('auth') },
    data: {
      templateIdx,
      templateName,
      templateComment,
    },
  });

export const deleteTemplate = templateIdx =>
  axios({
    method: 'delete',
    url: `${url}/templates/${templateIdx}`,
    headers: { Authorization: localStorage.getItem('auth') },
  });
