const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Product {
    _id: ID
    generalCategory: String
    productCategory: String  
    productName: String
    brandName: String
    productSize: String
    productPrice: Int
    productStock: Int
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    product: [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
