
const mongoose = require('mongoose');//importamos los requerimientos para usar mongodb, le colocamos el nombre que queramos
                                        //a nuestra a base de datos

module.exports.fuc = async function connect()//exportamos nuestra funcion para poder utilizar en el index principal
{
    try{
    await mongoose.connect('mongodb://localhost/mongodbgraphql',{
    
        useNewUrlParser: true,//nos ayuda a quitar errores o por algun driver que no tengamos instalado
        useUnifiedTopology: true

    })
    console.log('CONEXION EXITOSA');
    }catch(e)
   {
    console.log('ERROR AL CONECTARSE= '+e);
   }
}

//module.exports = connect();