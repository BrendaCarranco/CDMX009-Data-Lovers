import injuries from './data/injuries/injuries.js';

let database = injuries                 //Declarando mi base en una variable

// globales
let medio
let fromYear
let toYear
let list
let obj

export const datos = (database)


let graficas = (document.getElementById('linear'));         //Jalar valor de los años seleccionados por el usuario.

graficas.onclick = function (x) {
    let fromm = document.getElementById('fromm').value;
    let too = document.getElementById('too').value;
    fromYear = fromm
    toYear = too
    doFilter()
}

let icons = document.querySelectorAll('.iconSelect')   // Declarando todos mis botones en una variable.

function setSelectedImage(e) {                          //Función para imprimir la imagen del medio seleccionado en mi html.
    let img = e.target
    document.getElementById('imgSelect').innerHTML = `<img src="${img.src}" />`
    medio = img.id
}

function recorreIcons(icon) {
    icon.onclick = setSelectedImage
}

icons.forEach(recorreIcons)

function doFilter() {                       //Función para filtrar mis datos

    let array = []
    database.map(item => {
        obj = {
            year: parseInt(item.Year.split('-')[0]),
            num: item[medio]
        }
        if (obj.num && fromYear <= obj.year && obj.year <= toYear) array.push(obj)
    })
    list = array
    console.log(list)


    let newArre = [];                       //Empujando los datos seleccionados a un nuevo array para poder graficar.
    for (var i = 0; i < list.length; i++) {
        let yearF = list[i].year;
        let numF = list[i].num;
        newArre.push([yearF, numF]);
        console.log(newArre);
    };
};

////////////////////

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([  
    ['AÑOS', 'Heridos'],
    /*  [dataFinal, dataFinal] */

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

 
  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
 //DRAWCHART

google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);
      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Años');
        data.addColumn('number', 'Heridos');
        data.addRows([
          /* [dataFinal, dataFinal] */
          

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

        table.draw(data, {showRowNumber: true, width: '50%', height: '50%'});

        let options = {
          title: medio,
          vAxis: {title: 'Heridos'},
          hAxis: {title: 'Años'},
          
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));

        chart.draw(data, options);
      }; 






// Ya no pudimos imprimir los datos en el chart, si en consola, no en el chart :( 