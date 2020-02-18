export const movies = [
    {
        id: 0,
        name: "LeeJaeYoung",
        score: 24,
    },
    {
        id: 1,
        name: "jang",
        score: 26,
    },
    {
        id: 2,
        name: "kim",
        score: 23,
    },
    {
        id: 3,
        name: "lee",
        score: 22,
    },
];


export const getMovies = () => {
    return movies;
}

//요청한 id와 같은 id를 가진 객체정보를 리턴
export const getById = (id) => {
    // console.log(id);
    const filteredMovies = movies.filter(
        movie => movie.id === id
    );
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    //요청한 id와 같지 않은 id를 가진 객체정보들을 리턴
    const cleanedMovies = movies.filter(movie => movie.id != id);

    //movies객체의 길이가 더 길면
    if (movies.length > cleanedMovies.length) {
        movie = cleanedMovies;
        return true;
    }
    //movies와 cleanedMovies의 길이가 같으면(즉, 없는 id로 잘못 검색했으면)
    else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score,
    };
    movies.push(newMovie);

    return newMovie;
}


