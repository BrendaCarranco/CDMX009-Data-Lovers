import injuries from './data/injuries/injuries.js';

let database = injuries             //Declarando mi base en una variable

// globales
let medio
let fromYear
let toYear
let list

export const datos = (database)     


let graficas = (document.getElementById('linear'));         //Jalar valores de los intervalos en mi hoja de graficas

    graficas.onclick = function (x) {
        let fromm = document.getElementById('fromm').value;
        let too = document.getElementById('too').value;
        fromYear = fromm
        toYear = too
        doFilter()
    }

let icons = document.querySelectorAll('.iconSelect')


function setSelectedImage(e){
    let img = e.target
    document.getElementById('imgSelect').innerHTML = `<img src="${img.src}" />`
    medio = img.id
}

function recorreIcons(icon){
    icon.onclick = setSelectedImage
}

console.log(icons)
icons.forEach(recorreIcons)

function doFilter(){

    let array = []
    database.map(item=>{
        let obj = {
            year:parseInt(item.Year.split('-')[0]),
            num:item[medio]
        }
        if(obj.num && fromYear<obj.year && obj.year<toYear) array.push(obj)
    })
    list = array

    console.log(list)
}



//export const injuries = () => {
//  console.log(data);
//};

