//schema.graphql 참고
import { people, getById } from "./db";

const resolvers = {
    Query: {
        // people: () => {
        //     return people;
        // }
        people: () => people,

        /*query{
            person(id:1, name : "jang"){
                name
            }   
        }
        */
        //사용자로부터 받은 id와 name을 받아와서 getById함수 실행
        person: (_, { id, name }) => getById(id, name)
    }
}

export default resolvers;