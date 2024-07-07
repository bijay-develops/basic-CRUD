var selectedRow = null;
function onFormSubmit(){

}

//Retrive the data 
function readFormData(){
    var formData = {};
    formData["BookName"] = document.getElementById("BookName").value;
    formData["BookValue"] = document.getElementById("BookValue").value;
    formData["SNnumber"] = document.getElementById("SNnumber").value;
    return formData;
}