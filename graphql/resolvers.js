//schema.graphql 참고
import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movie: (_, { id }) => getMovie(id), //get 영화 하나
    movies: (_, { limit, rating }) => getMovies(limit, rating), //get 영화들
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
