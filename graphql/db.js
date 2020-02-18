import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }

  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  console.log(REQUEST_URL);

  return fetch(REQUEST_URL)
    .then(function(res) {
      return res.json(); //객체화하여 리턴
    })
    .then(function(json) {
      return json.data.movies; //json data중 movies객체를 리턴
    })
    .catch(function(error) {
      console.log(error);
    });
};
