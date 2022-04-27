import axios from "axios";

export const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const getWord = () => {
  let wordSet;
  let todaysWord;

  var axios = require("axios");

  var config = {
    method: "get",
    url: "http://127.0.0.1:5000/dailyWord",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      const todaysWord = JSON.stringify(response.data);
      wordSet = new Set(todaysWord);
    })
    .catch(function (error) {
      console.log(error);
    });
  return { wordSet, todaysWord };
};
