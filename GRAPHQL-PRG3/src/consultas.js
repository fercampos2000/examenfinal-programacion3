const animales = require('./Informacion_A');

const usuario = require('./modelos/animal')

const ganado ={
    Query:{
        animales()
        {
            return animales;
        },
        async Mostrar_Animales(){
            return await usuario.find();
        }

      
    },
    Mutation:{
        createTask(_,{input})//creando nuestra mutacion
        {
            //console.log(input);
           // input._id = movies.length;
            input._id = animales.length;
            animales.push(input);
           // movies.push(input);
           console.log(input);
            return input;
        },
    
       async createAnimal(_, {input})//creamos un nuevo animal y lo almacenamos en una base de datos de mongodb
        {
            
            try{
            const newUsr =new usuario(input)
           // console.log(newUsr);
           await newUsr.save();
           console.log(newUsr);
           console.log('ANIMAL AGREGADO');
            return newUsr;
           }catch(e)
           {
                console.log(e);
            }
        },
        async deleteAnimal(_, { _id }){
            //podemos eliminar un animal de la base de datos de mongo db
            //usando graphql y un servidor de node js
            await usuario.findByIdAndDelete(_id);
            console.log('ANIMAL ELIMINADO');

        },
        async updateAnimal(_, { _id, input }){///actualizamos los campos de un animal por medio del id generado por mongodb
            console.log('ANIMAL ACTULIZADO');
            return await usuario.findByIdAndUpdate(_id, input, {new: true});
            

        },
        async buscarAnimal(_, { _id, input }){
            console.log('ANIMAL ENCONTRADO');
            return await usuario.findOneAndReplace(_id, input, {new: true});
            

        }
    }
   
};

module.exports = ganado;