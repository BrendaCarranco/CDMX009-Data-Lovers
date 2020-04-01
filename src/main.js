import { accDatos } from './data.js';


let tableDraw = document.getElementById('table');
let linearDraw = document.getElementById ('chart_div');
let pieDraw = document.getElementById ('piechart_3d');

/* Mostrar y ocultar graficos */
function showChart () {
    tableDraw.style = 'display: none'
    linearDraw.style = 'display: block'
    pieDraw.style = 'display: block'
};
document.getElementById('linear').addEventListener('click', showChart);

function showTable () {
    linearDraw.style = 'display: none'
    pieDraw.style = 'display: none'
    tableDraw.style = 'display: block'
};
document.getElementById('tableChart').addEventListener('click', showTable);
/* Yap */

/* Mostrar y ocultar secciones */

let userPic = document.getElementById('ii')
let enter = document.getElementById('enter')
let regis = document.getElementById('registerP');
let icons = document.getElementById('icons');
let back = document.getElementById('back');
let footer = document.querySelectorAll('.foot');
let section = document.querySelectorAll('.section');

userPic.onclick = function() {
  document.getElementById('pag1').classList.add('hide');
  document.getElementById('pag2').classList.remove('hide');
}

enter.onclick = function() {
  document.getElementById('pag2').classList.add('hide');
  document.getElementById('pag4').classList.remove('hide');
}

regis.onclick = function() {
  document.getElementById('pag2').classList.add('hide');
  document.getElementById('pag3').classList.remove('hide');
}

icons.onclick = function () {
  document.getElementById('pag4').classList.add('hide');
  document.getElementById('pag5').classList.remove('hide');
}

back.onclick = function(){
  document.getElementById('pag5').classList.add('hide');
  document.getElementById('pag4').classList.remove('hide');
} 




/* function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }  */

console.log(accDatos());

















