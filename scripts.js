/*$(document).ready(function(){

  $( ".cardTitle" ).load(function() {
    doShowAll();
  });


});
//slide section
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


//pizza calculations

/*var pizzaCategories = {};
pizzaCategories.meats = [
  "Pepperoni",
  "Sausage",
  "Filet Mignon"
];
pizzaCategories.nonMeats = [
  "White Onions",
  "Red Onions",
  "Sauteed Onions",
  "Green Peppers",
  "Red Peppers",
  "Banana Peppers",
  "Ghost Peppers",
  "Habanero Peppers",
  "Jalapeno Peppers",
  "Avocado",
  "Zucchini",
  "Hummus"
];
pizzaCategories.cheeses = [
  "American Cheese",
  "Swiss Cheese",
  "Goat Cheese",
  "Mozzarella Cheese",
  "Parmesean Cheese",
  "Velveeta Cheese",
  "Gouda Cheese",
  "Muenster Cheese",
  "Ricotta Cheese",
  "Smoked Gouda"
];
pizzaIngredients.sauces = [
  "Red Sauce",
  "Marinara",
  "BBQ Sauce",
  "No Sauce",
  "Hot Sauce"
];
pizzaCategories.crusts = [
  "Crispy",
  "Glutten-free",
  "Stuffed"
];*/
var tbl = document.getElementById('tbllist');
var rowlist = document.getElementsByTagName('tr');
function AddItem()
{
 
  let qtyval = parseInt(document.getElementById('qty').value);
  if(!isNaN(qtyval) && qtyval > 0)
  {
    var rowlist = document.getElementsByTagName('tr');
    let row = tbl.insertRow(rowlist.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML =  `${document.getElementById('itmlist').value} - ${document.getElementById('crustlist').value} - ${document.getElementById('toppinglist').value} `;
    cell2.innerHTML = document.getElementById('size').value;
    cell3.innerHTML = document.getElementById('qty').value;

  }
  else{
    alert("Qty cannot be blank or negative")
  }
 
}
function RemoveItem()
{
  var rowlist = document.getElementsByTagName('tr');
  if(rowlist.length > 1)
  {


    tbl.deleteRow(rowlist.length-1)

  }

  
}
function ClearAll()
{

  var rowlist = document.getElementsByTagName('tr');
  for(i = rowlist.length;i>1;i--)
  {
    tbl.deleteRow(rowlist.length -1 );

  }
  

}
