//import {makeExecutableSchema} from "graphql-tools";
//import { makeExecutableSchema } from "graphql-tools";
//import graphqlTools from "graphql-tools";
//const { makeExecutableSchema } = graphqlTools;
//import { makeExecutableSchema } from "graphql-tools";
const { makeExecutableSchema } = require('graphql-tools');
const movies = require('./data');
//import { resolvers } from "./";

const typeDefs = `

type Query {
    animal: String
   saludo(name: String!): String
   movies:[Task]
   Users: [User]
   
   
}

type Task{
    _id: ID
    title: String
    description: String
}

type Mutation{
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
}

input TaskInput{
   
    title: String!
    description: String
}

type User{
  _id: ID
  Edad: Int
  nombre: String
  C_Partos: Int
  C_Crias: Int
}


`;//definismos lo que se puede consultar

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema;
/*const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })*/

//module.exports = {typeDefs: typeDefs,  resolvers:resolvers}


