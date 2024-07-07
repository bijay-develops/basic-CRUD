var selectedRow = null;
function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

// Retrive the data 
function readFormData(){
    var formData = {};
    formData["BookName"] = document.getElementById("BookName").value;
    formData["BookValue"] = document.getElementById("BookValue").value;
    formData["SNnumber"] = document.getElementById("SNnumber").value;
    return formData;
}


//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.BookName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.BookValue;
    var cell3 = newRow.insertCell(2);       
        cell3.innerHTML = data.SNnumber;
    var cell3 = newRow.insertCell(3);
        cell3.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//Edit the data 
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("BookName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("BookValue").value = selectedRow.cells[1].innerHTML;
    document.getElementById("SNnumber").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.BookName;
    selectedRow.cells[1].innerHTML = formData.BookValue;
    selectedRow.cells[2].innerHTML = formData.SNnumber;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this book record?')){
        row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById("BookName").value = '';
    document.getElementById("BookValue").value = '';
    document.getElementById("SNnumber").value = '';
    selectedRow = null;
}