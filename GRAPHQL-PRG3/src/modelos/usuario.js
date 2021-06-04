const { Schema , model } = require('mongoose');

const Datos_R = new Schema({

    nombre: {
        type: String,
        required : true
    },

    Litraje_L: Number,
    C_Crias: Number,
    Edad: Number,
    C_Partos: Number,
    Crias_Logradas: Number,
    Genetica: String,
    Vacunacion: String,
    Litraje_L: Number,
    Alimentacion: String


});
/*module.exports.model =  function modelo()
{
  model('usuario', Datos_R);
 //module.exports.fuc=
 return model;
}*/
 module.exports = model('usuario',Datos_R);


//module.exports= model;