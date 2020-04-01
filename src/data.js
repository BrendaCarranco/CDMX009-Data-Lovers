import data from './data/injuries/injuries.js';

/* Variables globales */
let img;
let medio;
let fromYear;
let toYear;
let list = [];
let yearList = [];
let injuriedList = [];
const dataFinal = [];
/* dataFinal[0] = ['año', 'heridos']
 */let obj;
const array = [];

export const accDatos = () => {

  /* Funciones para recorrer y seleccionar el ícono del medio de transporte */
  function setSelectedImage(e) {
    img = e.target;

    document.getElementById('imgSelect').innerHTML = `<img src="${img.src}"/>`;
    medio = img.id;
    document.getElementById('descMedio').innerHTML = medio;
  }

  function recorreIcons(icon) {
    icon.onclick = setSelectedImage;
  }

  const icons = document.querySelectorAll('.iconSelect');
  icons.forEach(recorreIcons);

  /*Obteniendo el intervalo de los años seleccionados*/
  const graphs = document.getElementById('linear');
  const table = document.getElementById('tableChart');

  /* Desplegar gŕaficas y tabla al click llamando la función */
  graphs.onclick = function () {
    const fromm = document.getElementById('fromm').value;
    const too = document.getElementById('too').value;
    fromYear = fromm;
    toYear = too;
    doFilter();
  };

  table.onclick = function () {
    let fromm = document.getElementById('fromm').value;
    let too = document.getElementById('too').value;
    fromYear = fromm;
    toYear = too;
    doFilter();
  };

  /* Función para obtener el array con los datos por año */
  function doFilter() {
    data.map(item => {
      obj = {
        year: parseInt(item.Year.split('_')[0]),
        num: item[medio]
      };
      if (fromYear <= obj.year && obj.year <= toYear) {
        array.push(obj);
  /*    console.log([array.year,array.num]) 23 marzo*/
      };
      return array;
    });
    list = array; /* Array de objetos */
    console.log(list);


  /* Ciclo for para obtener los datos a graficar */
    for (let i = 0; i < list.length; i++) {
      yearList = (list[i].year)/* .toString() */;
      injuriedList = list[i].num;

      dataFinal.push([parseInt(yearList), injuriedList]);
          console.log("yearList",[yearList, injuriedList])  
      
      console.log("dataFinal", dataFinal);   /* Array de arrays  */}

  /* Deplegar la gráfica */
      google.load("visualization", "1", { packages: ["corechart"] });
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        let dataChart = google.visualization.arrayToDataTable([

          // dataFinal
          /* grafica ejemplo */
          ['AÑO', 'heridos'],
          ['2000', 57723],
          ['2001', 60236],
          ['2002', 64713],
          ['2003', 67103],
          ['2009', 90000],
          ['2010', 82000] 
        ]);

        let options = {
          title: medio,
          vAxis: { title: 'Heridos' },
          hAxis: { title: 'Años' },

          is3D: true,
        };

        let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(dataChart, options);

      }

  /* Tabla */

  google.charts.load('current', { packages: ['table'] });
      google.charts.setOnLoadCallback(drawTable);
      function drawTable() {
        let dataChart = new google.visualization.DataTable();
        dataChart.addColumn('string', 'Años');
        dataChart.addColumn('number', 'Heridos');
        dataChart.addRows([
          [yearList.toString(), injuriedList] 
         /*  ['2000',  57723],
          ['2001',  60236],
          ['2002',  64713],
          ['2003',  67103],
          ['2007',  102994],
          ['2008',  95986], 
          ['2009',  90000],
          ['2010',  82000]  */
        ]);

        let table = new google.visualization.Table(document.getElementById('table'));

        table.draw(dataChart, { showRowNumber: true});
      };



    
    return accDatos;

  };

};