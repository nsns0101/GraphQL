// import fetch from "node-fetch";
import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/"; //홈 URL
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`; //영화 LIST URL
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`; //상세보기 URL
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`; //
//get 영화 1개
export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });

  return movie;
};

//get 영화들
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

//
export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  console.log(movies);
  return movies;
};
