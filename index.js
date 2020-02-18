// const graphYoga = require("graph-yoga");
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// console.log("reslovers : ", resolvers);
const server = new GraphQLServer({
  //GraphQLServer가
  typeDefs: "./graphql/schema.graphql", //Query나 Mutation의 정의를 발견하면
  resolvers //resolver를 찾을 것임
});

server.start(() => console.log("Graph Server Running"));
