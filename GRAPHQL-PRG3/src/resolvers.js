module.export = consultas ={
  Query:{
      hello: () =>{
          return 'HOLA JEFFERSON RR'
      },
      saludo (){
          return 22;
      }
    
  }

 
};//para consultar

/*export default {
    Query: {
      allCars: async (parent, args, { Car }) => {
        const cars = await Car.find();
        return cars.map(x => {
          x._id = x._id.toString();
          return x;
        })
      }
    },
    Mutation: {
      createCar: async (parent, args, { Car }) => {
        const car = await new Car(args).save();
        car._id = car._id.toString();
        return car;
      }
    }
  }*/