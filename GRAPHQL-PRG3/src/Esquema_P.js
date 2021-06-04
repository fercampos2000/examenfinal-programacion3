const { makeExecutableSchema } = require('graphql-tools');//nos sirve para crear un esquema y 
                                                            //poder utilizar nuestras consultas a la  vez

const consultas = require('./consultas');


const Animals1 = `

type Query {

   animales:[Animal]
   Mostrar_Animales: [usuario]

   
   
}

type Animal{
    _id: ID
    Edad: Int
    nombre: String
    C_Partos: Int
    C_Crias: Int
    Crias_Logradas: Int
    Genetica: String
    Vacunacion: String
    Litraje_L: Int
    Alimentacion: String
}

type usuario{
    _id: ID
    Edad: Int!
    nombre: String!
    C_Partos: Int!
    C_Crias: Int!
    Crias_Logradas: Int!
    Genetica: String!
    Vacunacion: String!
    Litraje_L: Int!
    Alimentacion: String!
}

type Mutation{
    createTask(input: TaskInput): Animal
    createAnimal(input: UserInput): usuario
    deleteAnimal(_id: ID): usuario
    updateAnimal(_id: ID, input: UserInput): usuario
    buscarAnimal(_id: ID, input: UserInput): usuario

}

input TaskInput{
   
    Edad: Int
    nombre: String
    C_Partos: Int
    C_Crias: Int
    Crias_Logradas: Int
    Genetica: String
    Vacunacion: String
    Litraje_L: Int
    Alimentacion: String

}

input UserInput{
    Edad: Int
    nombre: String  
    C_Partos: Int
    C_Crias: Int
    Crias_Logradas: Int
    Genetica: String
    Vacunacion: String
    Litraje_L: Int
    Alimentacion: String
}

`;



const schema = makeExecutableSchema({
    typeDefs: Animals1,//nuestra definiciones
    resolvers: consultas,//nuestras consultas que podemos realizar en esta aplicación con ciertos datos requeridos
});

module.exports = schema;//exportamos nuestro esquema que lleva nuestras definiiciones, como las mutaciones 
                        //que hacemos para actualizar, eliminar , agregar y mmostrar todos los animales creados