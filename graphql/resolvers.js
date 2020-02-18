//schema.graphql 참고
import { movies, getById, addMovie } from "./db";

const resolvers = {
    Query: {
        // people: () => {
        //     return people;
        // }
        movies: () => movies,

        /*query{
            person(id:1, name : "jang"){
                name
            }   
        }
        */
        //사용자로부터 받은 id와 name을 받아와서 getById함수 실행
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score)
    }

}

export default resolvers;