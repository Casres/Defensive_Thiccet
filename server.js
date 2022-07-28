const express = require("express");
const routes = require("./server/routes");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./server/schemas");
const db = require("./server/config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// this  uses JSON to transfer data to and from the DataBase
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  app.post("/register", (req, res) => {});
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
};
app.use(routes);

startApolloServer(typeDefs, resolvers);

// this is what you will need to set up a mongoDB and server
