const { makeExecutableSchema } = require('graphql-tools');
//const resolvers = require('./resolvers');

const movies = require('./data');
//const animales = require('./Informacion_A');
//const {data} = require("./data");

const typeDefs = `

type Query {
    animal: String
   saludo(name: String!): String
   movies:[Task]
   
   
}

type Task{
    _id: ID
    title: String
    description: String
}

type Mutation{
    createTask(input: TaskInput): Task
}

input TaskInput{
   
    title: String!
    description: String
}


`;//definismos lo que se puede consultar



const resolver2 ={
    Query:{
        animal: () =>{
            return 'GANADO BOVINO'
        },
        saludo(root, args)
        {
            console.log(args.name);//mandaole el objeto desde mi servidor
            return 'NOMBRE:'+args.name;
        },
        movies()
        {
            return movies;
        }
      
    },
    Mutation:{
        createTask(_,{input})//creando nuestra mutacion
        {
            //console.log(input);
            input._id = movies.length;
            movies.push(input);
            return input;
        }
    }
   
};

/*const resolver ={
    Query:{
        async movies(_, args)
        {
            return await movies;
        },
        async movies(_, {id})
        {
            return await movies.find((movie) => movie.id ===id);
        },
    },

    Mutation:{
        async createMovie(_, {title})
        {
            let newMovie ={
                id: movies.length,
                title,
            };
            return await movies.push(newMovie);
        },
    },
};*/

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolver2,
});

module.exports = schema;