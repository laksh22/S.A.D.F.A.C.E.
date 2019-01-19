import axios from "";

const BASE_URL = "https://www.ntumods.com";

export const getData= data => {
  return axios.post(`${BASE_URL}`, {
    text: 'axios testing'
  });
};