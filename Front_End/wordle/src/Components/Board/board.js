import axios from 'axios'

export const defaultBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];


export const getWord = () => {
  const url = 'http://127.0.0.1:5000/dailyWord'
  let wordSet;
  let todaysWord;
  axios.get(`${url}word`).then((response) => response.text()).then((result) =>{
    const todaysWord = result
    wordSet = new Set(todaysWord)
  });
  return { wordSet, todaysWord };
};
  