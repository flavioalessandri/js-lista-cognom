
//Ask User to fill the familyname field

//insert a btn var for the button
var btn= document.getElementById("btn");

//After  user click the button
btn.addEventListener("click", function() {
  var list =["Neroni","Bianchi", "Verdi", "Rossi", "Gialli"];
  console.log(list);
  var familyName = document.getElementById("familyName").value;

  var count= false;
  var tag =0;

  while (!isNaN(familyName) ){  //verify User data
    alert("Please insert your real FamilyName");
    break;
    }
    console.log("Cognome inserito", familyName);
    list.push(familyName); //add user familyName to our list
    console.log(list);


});
