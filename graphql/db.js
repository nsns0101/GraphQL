import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";


export const getMovies = () => {
    return fetch(`${API_URL}`)
        .then(function (res) {
            return res.json();
        })
        .then((json) => {
            return json.data.movies;
        })
        .catch(function (error) {
            console.log(error);
        });
}