
//Ask User to fill the familyname field

//insert a btn var for the button
var btn= document.getElementById("btn");

var btnCear= document.getElementById("btnClear");

//After  user click the button
btn.addEventListener("click", function() {
  var list =["Neroni","Bianchi", "Verdi", "Rossi", "Gialli"];
  var familyName = document.getElementById("familyName").value;

  list.push(familyName); //add user familyName to our list
  console.log(list);
  list.sort();
  console.log(list);

  for (var i =0; i< list.length;i++){
    var lista = list[i];
    console.log(lista);
    var familyNameIndex = list.indexOf(familyName);
    document.getElementById("position").innerHTML = "Il tuo cognome è alla posizione numero " + (familyNameIndex+1) + " della lista!" ;
    document.getElementById("familyNameList").innerHTML += "<li>"+lista+"</li>";
}

});//addEventListener End

var btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", function() {

document.getElementById("familyNameList").innerHTML = "";
document.getElementById("position").innerHTML = "";

});//addEventListener End
