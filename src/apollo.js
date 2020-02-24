import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  url: "https://movieql.now.sh/"
});

export default client;
