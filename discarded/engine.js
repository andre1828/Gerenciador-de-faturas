const {
    app
} = require('electron').remote;

let fatura = {};
let entry = {};
entry.name = "";
entry.date = "";
entry.value = 0;
entry.selected;


let entryTemplate;

let entryList = document.getElementById('entryList');

let nameField = document.getElementById('nameField');
let dateField = document.getElementById('dateField');
let valueField = document.getElementById('valueField');
let body = document.body;

//  FOR TESTS
// nameField.value = 'Nome';
// dateField.value = 'Date';
// valueField.value = 'Value';
//

nameField.addEventListener('input', () => entry.name = nameField.value);
dateField.addEventListener('input', () => entry.date = nameField.value);
valueField.addEventListener('input', () => entry.value = nameField.value);


function makeNewEntry(name, date, value) {
    let tr = document.createElement('tr');

    tr.addEventListener('click', () => {
      tr.className = (tr.className === "nonSelectedRow") ? "selectedRow" : "nonSelectedRow";


    });

    let tdName = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdValue = document.createElement('td');

    tdName.innerHTML = name;
    tdDate.innerHTML = date;
    tdValue.innerHTML = value;
    tr.appendChild(tdName);
    tr.appendChild(tdDate);
    tr.appendChild(tdValue);

    return tr;
}

function addEntry() {
    if (validateData() === false) {
      alertInvalidData();
      return;
    }

    let newEntry = makeNewEntry(nameField.value, dateField.value, valueField.value);
    entryList.appendChild(newEntry);
    resetStyle();
}

function validateData() {
    if (nameField.value === "" || dateField.value === ""  || valueField.value === "" ) {
      return false;
    }
}

function alertInvalidData() {
    nameField.className = "invalidInput";
    dateField.className = "invalidInput";
    valueField.className = "invalidInput";
}

function resetStyle() {
  nameField.className = "defaultStyle";
  dateField.className = "defaultStyle";
  valueField.className = "defaultStyle";

}
