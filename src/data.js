import injuries from './data/injuries/injuries.js';

let database = injuries             //Declarando mi base en una variable

export const datos = (database)     

let car = database.map(function(carr) {                         //Variable para buscar personas heridas x carro
return carr.Total_Injured_Persons_Passenger_Car_Occupants;
});
console.log(car)                                                //Imprimiendo personas heridas

/////////////////////////////////////////////////

let years  = database 
    .filter(function(yearsF) {
        return yearsF.Year === '2013-01-04';
    });
console.log(years)

/* let carrito = database
    .filter (function(carritos){
        return carritos.Total_Injured_Persons_Passenger_Car_Occupants;
    });
    console.log(carrito) /////////// me da todos los años con datos de carro
 */

//////////////////////////////////////////////////////////////










//export const injuries = () => {
//  console.log(data);
//};

let graficas = (document.getElementById('linear'));
    graficas.onclick = function () {
        let fromm = document.getElementById('fromm').value;
        let too = document.getElementById('too').value;
    console.log(fromm,too)
    }


