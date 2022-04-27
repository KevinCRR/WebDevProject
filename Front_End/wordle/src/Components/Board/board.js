import wordBank from "../../Assets/Wordle.txt"

export const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const getWord = async () => {

  var axios = require("axios");
  var config = {
    method: "get",
    url: "http://127.0.0.1:5000/dailyWord",
    headers: {},
  };

  let wordSet;
  let todaysWord;
  axios(config)
    .then(function (response) {
      const selectWord = response.data
      todaysWord = selectWord;
    })
    .catch(function (error) {
      console.log(error);
    });
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordSet = new Set(wordArr);
    });

  return { wordSet, todaysWord };
};
