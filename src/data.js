import data from './data/injuries/injuries.js';

//DECLARANDO VARIABLES GLOBALES
let medio;
let fromYear;
let toYear;
let list;
let icons = document.querySelectorAll('.iconSelect');
let años = [];
let heridos = [];
let dataFinal = [];

export const accDatos = () => {
  
  let database = data   //ASIGNANDO A UNA VARIBLE LA BASE DE DATOS
  
//FUNCIONES PARA RECORRER Y SELECCIONAR EL ICONO DEL MEDIO.
  function setSelectedImage(e) {
    let img = e.target;

    document.getElementById('imgSelect').innerHTML = `<img src="${img.src}"/>`;       
    medio = img.id;
    document.getElementById('descMedio').innerHTML = medio;
    
    console.log(medio)
  };
  
  function recorreIcons(icon) {
    icon.onclick = setSelectedImage;    
  };

  //console.log(icons);

  icons.forEach(recorreIcons); 

  //-------------------GRAFCAS-----------------//
  //OBTENIENDO EL INTERVALO PARA LAS GRAFICAS Y LA TABLA
  let graficas = document.getElementById('linear'); 
  let table = document.getElementById('tablita') ;

  //FUNCION PARA DESPLEGAR LA GRAFICA AL HACER CLICK EN GRAFICAS O TABLA Y LLAMANDO A LA FUNCION doFilter()
  graficas.onclick = function(x) {
    let fromm = document.getElementById('fromm').value;
    let too = document.getElementById('too').value;
    fromYear = fromm;
    toYear = too;
    doFilter();
  };

  table.onclick = function(x) {
    let fromm = document.getElementById('fromm').value;
    let too = document.getElementById('too').value;
    fromYear = fromm;
    toYear = too;
    doFilter();
  };

  //FUNCION PARA OBTENER EL INTERVALO.
  function doFilter() {
    let array = [];
    database.map(item => {
      let obj = {
        year : parseInt(item.Year.split('_')[0]),
        num : item[medio]
      };
      if(fromYear <= obj.year && obj.year <= toYear) { 
        array.push(obj);
        };
        return array;
     });

    list = array; //ESTO ES UN ARRAY DE OBJETOS
    console.log(list);   

 //CICLO PARA OBTENER LOS DATOS PARA GRAFICAR

    for(let i = 0; i < list.length; i++) {
      años = (list[i].year).toString();
      heridos = list[i].num;

      dataFinal.push([años, heridos])     

    
    console.log([años, heridos])    

    };

    console.log(dataFinal)    

return accDatos;

};
};



























  







