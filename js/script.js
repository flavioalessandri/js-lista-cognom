
//Ask User to fill the familyname field

//insert a btn var for the button
var btn= document.getElementById("btn");

var btnCear= document.getElementById("btnClear");

//After  user click the button
btn.addEventListener("click", function() {
  var list =["Neroni","Bianchi", "Verdi", "Rossi", "Gialli"];
  console.log(list);
  var familyName = document.getElementById("familyName").value;

  list.push(familyName); //add user familyName to our list

  for (var i =0; i<list.length;i++){
    var lista = list[i];
    // console.log(lista);
    var orderedList= list.sort();
    var familyNameIndex = orderedList.indexOf(familyName);
    document.getElementById("position").innerHTML = "Il tuo cognome è alla posizione numero " + (familyNameIndex+1) + " della lista!" ;
    document.getElementById("familyNameList").innerHTML += "<li>"+lista+"</li>";
}

});//addEventListener End
