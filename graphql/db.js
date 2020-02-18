//const로 정해주면 read-only라 let이나 var주기
export let movies = [
    {
        id: 1,
        name: "LeeJaeYoung",
        score: 24,
    },
    {
        id: 2,
        name: "jang",
        score: 26,
    },
    {
        id: 3,
        name: "kim",
        score: 23,
    },
    {
        id: 4,
        name: "lee",
        score: 22,
    },
];

// 영화를 get
export const getMovies = () => {
    return movies;
}

// 영화 id get
export const getById = (id) => {
    // console.log(id);
    //요청한 id와 같은 id를 가진 객체정보를 리턴
    const filteredMovies = movies.filter(
        movie => movie.id === id
    );
    return filteredMovies[0];
}

//영화 delete
export const deleteMovie = (id) => {
    //요청한 id와 같지 않은 id를 가진 객체정보들을 리턴

    const cleanedMovies = movies.filter(
        movie => movie.id != id
    );
    console.log(movies.length);
    console.log(cleanedMovies.length);

    //movies객체의 길이가 더 길면
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }
    //movies와 cleanedMovies의 길이가 같으면(즉, 없는 id로 잘못 검색했으면)
    else {
        return false;
    }
}

//영화 add
export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score,
    };
    // console.log(newMovie.id);
    movies.push(newMovie);

    return newMovie;
}



