// const graphYoga = require("graph-yoga");
import { GraphQLServer } from "graphql-yoga";


const server = new GraphQLServer({

})

server.start(() => console.log("Graph Server Running"));