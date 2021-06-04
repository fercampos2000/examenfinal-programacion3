

const express = require('express')//nos permite crear un servidor y ejecutar nuestra api de graphql
const {graphqlHTTP} = require('express-graphql');

const Esquema_P = require("./Esquema_P");
const MyBase = require("./BaseDeDatos");
const path = require('path');


MyBase.fuc();

const app = express();//mi app es nuestro servidor el que le mandamos lo que quiere que haga



app.get('/', (req, res) =>{//creatmos una ruta para la pagina principal

   // res.sendFile(path.join(__dirname, 'templates/vista.html'));
   res.sendFile(path.join(__dirname, 'templates/vista.html'));



});


//const resolvers ={ };
app.use('/animals', graphqlHTTP({//configurando /graphql para crear una funcion que permita integrar graphql en express
    // your config
    graphiql: true,
    schema: Esquema_P,
    context:{
        messageId: 'test'
    }
})); 


//iniciando servidor en el puerto 8000
app.listen(8000, () => console.log('SERVIDOR EJECUTADO EN EL PUERTO 8000  http://localhost:8000'));
//rinraf me permite eliminar carpetas de mi proyecto