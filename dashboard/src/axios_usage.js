import axios from "axios";

const BASE_URL = "\\";

export const getPredictions = message => {
  return axios.post(`${BASE_URL}`, {
    text: "axios testing"
  });
};