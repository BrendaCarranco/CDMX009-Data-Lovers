import data from './data/injuries/injuries.js';

//DECLARANDO VARIABLES GLOBALES
let medio;
let fromYear;
let toYear;
let list;

export const accDatos = () => {
  
  let database = data   //ASIGNANDO A UNA VARIBLE LA BASE DE DATOS
  
   let icons = document.querySelectorAll('.iconSelect');

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

  let graficas = document.getElementById('linear')  //OBTENIENDO EL INTERVALO
  let table = document.getElementById('tablita') 

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
    list = array;

    console.log(list);   

 //CICLO PARA OBTENER LOS DATOS PARA GRAFICAR

    for(let i = 0; i < list.length; i++) {
      list[i].year;
      list[i].num;
 
      //console.log(list[i].year, list[i].num); 

/****************** DESPLEGAR GRAFICAS *********************/
    let años = (list[i].year).toString();
    let heridos = list[i].num;

    console.log(años, heridos)

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  let datos = google.visualization.arrayToDataTable([    
    ['AÑO', 'Heridos'], 
/*     [años, heridos] */
    ['2000',  57723],
    ['2001',  60236],
    ['2002',  64713],
    ['2003',  67103],
    ['2004',  76379],
    ['2005',  87335],
    ['2006',  88652],
    ['2007',  102994],
    ['2008',  95986], 
    ['2009',  90000],
    ['2010',  82000]   
  ]); 

 
  let options = {
    title: medio,
    vAxis: {title: 'Heridos'},
    hAxis: {title: 'Años'},
    
    is3D: true,
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(datos, options);

  let chart3d = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart3d.draw(datos, options);

} //DRAWCHART
  


google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Años');
        data.addColumn('number', 'Heridos');
        data.addRows([
          /* [años, heridos], */

          ['2000',  57723],
          ['2001',  60236],
          ['2002',  64713],
          ['2003',  67103],
          ['2004',  76379],
          ['2005',  87335],
          ['2006',  88652],
          ['2007',  102994],
          ['2008',  95986], 
          ['2009',  90000],
          ['2010',  82000]
        ]);

        

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '20%', height: '100%'});
      }
























}//ESTE ES EL DEL CICLO
        
}; //FUNCION FILTER


//return accDatos;

}; //EL DE LA FUNCION PRINCIPAL



























  //**************************************************************** */


//VARIABLES PARA OBTENER LOS DATOS DEL USUARIO-----------
/*   let medio = document.getElementById('icons').value
  let grafica = document.getElementById('linear').value;
  let periodoDe = parseInt(document.getElementById('fromm').value);
  let periodoA = parseInt(document.getElementById('too').value);

   año = data.filter(function(año) {
      periodoDe.value == parseInt(año.data);
      periodoA.value == parseInt(año.data); 
      
      return año.data;  
}); 
  console.log(periodoDe, periodoA);  */


//FUNCION QUE ME DA LOS DATOS POR MEDIO DE TRANSPORTE. (YA SEA CON FILTER O CON MAP) OK OK OK--------
  /* bus = data.map(function(bus) {
  if(bus.data == 'Total_Injured_Persons_Bus_Occupants') {
    return bus.Total_Injured_Persons_Bus_Occupants, bus.Year;       
  };

  console.log("Total_Injured_Persons_Bus_Occupants: ", bus.Year, bus.Total_Injured_Persons_Bus_Occupants)    
});  */

//-----------OK OK OK ----------------

//BOTON DE ICONO DE TRANSPORTE PARA TRAER LOS DATOS (PERIDO DE Y PERIODO A)
/* let prueba = document.querySelector('#bus');
  prueba.addEventListener('click', traerDatos());

function traerDatos(e) {
  let iconoBus;
  iconoBus = document.getElementById('#bus');

  }
  
  console.log('Funciona'); //NO FUNCIONA CORRECTAMENTE.......

}; */
  
//LLAVE FINAL DE FUNCION PRINCIPAL


//••••••••••-----------------------------•••••••••••••••••••••

  
  /* const usuperiodoDe = data.filter(function(z) {
    if(z.Year == '2004-01-04') {
      console.log("Total_Injured_Persons_Bus_Occupants: ", z.Year, z.Total_Injured_Persons_Bus_Occupants)
    }   
    return z.Total_Injured_Persons_Bus_Occupants;       
  });

  const periodoDe = data.map(function(x) {
    if(x.Year == '2003-01-04') {
      console.log("Total_Injured_Persons_Motorcyclists: ", x.Year, x.Total_Injured_Persons_Motorcyclists)
    }   
    return x.Year;       
  });

  const periodoA = data.map(function(y) {
    if(y.Year == '2010-01-04') {
      console.log(y.Year, y.Total_Injured_Persons_Motorcyclists)
     
    }
    return y.Year ;
  });
};
 */
  







//----OK-----OK---OK------
/*   export const accDatos = () => { // LINEA ORIGINAL

    const años = data.map(function(x) {
      if(x.Year == '2003-01-04' && x.Total_Injured_Persons_Motorcyclists >= 67000 )  {
        console.log("Total_Injured_Persons_Motorcyclists: ", x.Total_Injured_Persons_Motorcyclists, x.Year)
      }
      return x.Year;
         
    })
  
    } */



  
/*   const anos1 = data.map(x => x.Year)
  
  console.log(anos1) 
  
/*   const anos = data.map(x => x.Year)
  console.log(anos) */

/*   let porAño = data.filter( transp => {
    return transp.Total_Injured_Persons_Transit_Total > 50000
  } )

  return porAño;  // LINEA ORIGINAL
}; */





//console.log(data[0].Year) ---BLISS----

/* export const example = () => {
  return 'example';
}; */


