// const graphYoga = require("graph-yoga");
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

console.log("reslovers : ", resolvers);
const server = new GraphQLServer({
    typeDefs: "./graphql/schema.graphql",
    resolvers
})

server.start(() => console.log("Graph Server Running"));