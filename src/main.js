import { accDatos } from './data.js';

let medio;
let fromYear;
let toYear;
let list;
let icons = document.querySelectorAll('.iconSelect');
let años = [];
let heridos = [];
let dataFinal = [];

//OBTENIENDO EL INTERVALO PARA LAS GRAFICAS Y LA TABLA
let graficas = document.getElementById('linear'); 
let table = document.getElementById('tablita') ;

/************ DESPLEGAR GRAFICAS Y TABLA******************/
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  let datos = google.visualization.arrayToDataTable([    
    ['AÑO', 'Heridos'],
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

        table.draw(data, {showRowNumber: true, width: '20%', height: '100%'});
      };        

//console.log(accDatos());

















