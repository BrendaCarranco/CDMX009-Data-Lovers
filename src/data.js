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
        return yearsF.Year === '2016-01-04';
    });
console.log(years)

//////////////////////////////////////////////////////////////










//export const injuries = () => {
//  console.log(data);
//};

