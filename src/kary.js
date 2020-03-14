import { cleanData } from './data.js';

window.onload = function(){
  let showTable = document.getElementById('tab-content-table');
  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');

  table.border = '1';
  table.appendChild(tableBody);

  let heading = ['ID', 'Nombre', 'Fecha de nacimiento', 'Teléfono', 'Dirección'];
  
  //COLUMNAS DE LA TABLA
  let tr = document.createElement('tr');
  tableBody.appendChild(tr);

  for (let i = 0; i < heading.length; i++) {
    let th = document.createElement('th')
    th.appendChild(document.createTextNode(heading[i]));
    tr.appendChild(th);
  }

 //FILAS DE LA TABLA
  for (let i = 0; i < cleanData.length; i++) {
  let tr = document.createElement('tr');
  let tdId = document.createElement('td');
  tdId.appendChild(document.createTextNode(cleanData[i].id));
  tr.appendChild(tdId);

  let tdName = document.createElement('td');
  tdName.appendChild(document.createTextNode(cleanData[i].name));
  tr.appendChild(tdName);
  tableBody.appendChild(tr);
    
  let tdBirthdate = document.createElement('td');
  tdBirthdate.appendChild(document.createTextNode(cleanData[i].birthDate));
  tr.appendChild(tdBirthdate);
  tableBody.appendChild(tr);

  let tdPhone = document.createElement('td');
  tdPhone.appendChild(document.createTextNode(cleanData[i].phone));
  tr.appendChild(tdPhone);
  tableBody.appendChild(tr);

  let tdAddress = document.createElement('td');
  tdAddress.appendChild(document.createTextNode(cleanData[i].address));
  tr.appendChild(tdAddress);
  tableBody.appendChild(tr);
}
showTable.appendChild(table)
}