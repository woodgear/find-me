const { gql } = require("apollo-server");

const typeDefs = gql`
"""
the cat
"""
type SpaceCat {
  "name"
  id:ID!
  name: String!
  age: Int
  missions: [Mission]
}

type Mission {
  id: ID!
  name: String!
  description: String!
}

type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

type Author {
  id: ID!
  name: String!
  photo: String
}

type Query {
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
  spaceCats:[SpaceCat]
}

type Mutation {
  addCat(name: String): SpaceCat
}
`;
module.exports = typeDefs;
