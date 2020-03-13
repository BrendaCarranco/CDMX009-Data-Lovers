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



// Ya no pudimos imprimir los datos en el chart, si en consola, no en el chart :( 

   ////////////////////////////////EJEMPLO CHART GOOGLE/////////////////////////////7



/* // Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Dinosaur', 'Length'],
    ['Acrocanthosaurus (top-spined lizard)', 12.2],
    ['Albertosaurus (Alberta lizard)', 9.1],
    ['Allosaurus (other lizard)', 12.2],
    ['Apatosaurus (deceptive lizard)', 22.9],
    ['Archaeopteryx (ancient wing)', 0.9],
    ['Sauronithoides (narrow-clawed lizard)', 2.0],
    ['Seismosaurus (tremor lizard)', 45.7],
    ['Spinosaurus (spiny lizard)', 12.2],
    ['Supersaurus (super lizard)', 30.5],
    ['Tyrannosaurus (tyrant lizard)', 15.2],
    ['Ultrasaurus (ultra lizard)', 30.5],
    ['Velociraptor (swift robber)', 1.8]]);
    console.log(data)
  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
 */


