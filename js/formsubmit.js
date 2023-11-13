let Product_Name = document.getElementById("Product_Name");
let Product_Quantity = document.getElementById("Product_Quantity");
let productform = document.getElementById("productform");
let Product_Unit = document.getElementById("Product_Unit");

// Basic Details 
let Protein_Quantity = document.getElementById("Protein_Quantity");
let Carb_Quantity = document.getElementById("Carb_Quantity");
let Fat_Quantity = document.getElementById("Fat_Quantity");
let Fibre_Quantity = document.getElementById("Fibre_Quantity");

// Vitamins Details


let vit1 = document.getElementById("vit1");
let vit1_Unit = document.getElementById("vit1_Unit");

let vit2 = document.getElementById("vit2");
let vit2_Unit = document.getElementById("vit2_Unit");

let vit3 = document.getElementById("vit3");
let vit3_Unit = document.getElementById("vit3_Unit");

let vit4 = document.getElementById("vit4");
let vit4_Unit = document.getElementById("vit4_Unit");

let vit5 = document.getElementById("vit5");
let vit5_Unit = document.getElementById("vit5_Unit");

let vit6 = document.getElementById("vit6");
let vit6_Unit = document.getElementById("vit6_Unit");

let vit7 = document.getElementById("vit7");
let vit7_Unit = document.getElementById("vit7_Unit");

let vit8 = document.getElementById("vit8");
let vit8_Unit = document.getElementById("vit8_Unit");

let vit9 = document.getElementById("vit9");
let vit9_Unit = document.getElementById("vit9_Unit");

let vit10 = document.getElementById("vit10");
let vit10_Unit = document.getElementById("vit10_Unit");

let vit11 = document.getElementById("vit11");
let vit11_Unit = document.getElementById("vit11_Unit");

let vit12 = document.getElementById("vit12");
let vit12_Unit = document.getElementById("vit12_Unit");

let vit13 = document.getElementById("vit13");
let vit13_Unit = document.getElementById("vit13_Unit");


// Minerals 

let min1 =  document.getElementById("min1");
let min1_Unit =  document.getElementById("min1_Unit");

let min2 =  document.getElementById("min2");
let min2_Unit =  document.getElementById("min2_Unit");

let min3 =  document.getElementById("min3");
let min3_Unit =  document.getElementById("min3_Unit");

let min4 =  document.getElementById("min4");
let min4_Unit =  document.getElementById("min4_Unit");

let min5 =  document.getElementById("min5");
let min5_Unit =  document.getElementById("min5_Unit");

let min6 =  document.getElementById("min6");
let min6_Unit =  document.getElementById("min6_Unit");

let min7 =  document.getElementById("min7");
let min7_Unit =  document.getElementById("min7_Unit");

let min8 =  document.getElementById("min8");
let min8_Unit =  document.getElementById("min8_Unit");

let min9 =  document.getElementById("min9");
let min9_Unit =  document.getElementById("min9_Unit");

let min10 =  document.getElementById("min10");
let min10_Unit =  document.getElementById("min10_Unit");

let min11 =  document.getElementById("min11");
let min11_Unit =  document.getElementById("min11_Unit");

let min12 =  document.getElementById("min12");
let min12_Unit =  document.getElementById("min12_Unit");

let min13 =  document.getElementById("min13");
let min13_Unit =  document.getElementById("min13_Unit");

let min14 =  document.getElementById("min14");
let min14_Unit =  document.getElementById("min14_Unit");

let min15 =  document.getElementById("min15");
let min15_Unit =  document.getElementById("min15_Unit");

let min16 =  document.getElementById("min16");
let min16_Unit =  document.getElementById("min16_Unit");

let min17 =  document.getElementById("min17");
let min17_Unit =  document.getElementById("min17_Unit");

let min18 =  document.getElementById("min18");
let min18_Unit =  document.getElementById("min18_Unit");

// Submit button 

let submitbtn = document.getElementById("addnewbtn");

let completeData = JSON.parse(localStorage.getItem('Mypowerdiet'));
if (completeData === null) {
  console.log("No Data is available till now")
  completeData = [];
}
// console.log(Product_Unit.options[Product_Unit.selectedIndex].text);
// console.log(Product_Unit.value);


  

// Class Constructor for convert user input to an object 

function defineMaterial(name, quantity, Unit, protein, carb, fats, fibre,vit1,vit1_Unit,vit2,vit2_Unit,vit3,vit3_Unit,vit4,vit4_Unit,vit5,vit5_Unit,vit6,vit6_Unit,vit7,vit7_Unit,vit8,vit8_Unit,vit9,vit9_Unit,vit10,vit10_Unit,vit11,vit11_Unit,vit12,vit12_Unit,vit13,vit13_Unit,min1,min1_Unit,min2,min2_Unit,min3,min3_Unit,min4,min4_Unit,min5,min5_Unit,min6,min6_Unit,min7,min7_Unit,min8,min8_Unit,min9,min9_Unit,min10,min10_Unit,min11,min11_Unit,min12,min12_Unit,min13,min13_Unit,min14,min14_Unit,min15,min15_Unit,min16,min16_Unit,min17,min17_Unit,min18,min18_Unit) {
  
  this.productName = name, 
  this.productQuantity = quantity;
  this.productUnit = Unit,
  this.proteinQuantity =  protein,
  this.carbQuantity = carb,
  this.fatQuantity = fats,
  this.fibreQuantity = fibre,
  // Vitamtins details 
  
  this.vit1 =  vit1,
  this.vit1_Unit = vit1_Unit,

  this.vit2 =  vit2,
  this.vit2_Unit = vit2_Unit,

  this.vit3 =  vit3,
  this.vit3_Unit = vit3_Unit,

  this.vit4 =  vit4,
  this.vit4_Unit = vit4_Unit,

  this.vit5 =  vit5,
  this.vit5_Unit = vit5_Unit,

  this.vit6 =  vit6,
  this.vit6_Unit = vit6_Unit,

  this.vit7 =  vit7,
  this.vit7_Unit = vit7_Unit,

  this.vit8 =  vit8,
  this.vit8_Unit = vit8_Unit,

  this.vit9 =  vit9,
  this.vit9_Unit = vit9_Unit,

  this.vit10 =  vit10,
  this.vit10_Unit = vit10_Unit,

  this.vit11 =  vit11,
  this.vit11_Unit = vit11_Unit,

  this.vit12 =  vit12,
  this.vit12_Unit = vit12_Unit,

  this.vit13 =  vit13,
  this.vit13_Unit = vit13_Unit;

  // Minerals 
  
  this.min1 = min1,
  this.min1_Unit = min1_Unit,
  
  this.min2 = min2,
  this.min2_Unit = min2_Unit,
  
  this.min3 = min3,
  this.min3_Unit = min3_Unit,
  
  this.min4 = min4,
  this.min4_Unit = min4_Unit,
  
  this.min5 = min5,
  this.min5_Unit = min5_Unit,
  
  this.min6 = min6,
  this.min6_Unit = min6_Unit,
  
  this.min7 = min7,
  this.min7_Unit = min7_Unit,
  
  this.min8 = min8,
  this.min8_Unit = min8_Unit,
  
  this.min9 = min9,
  this.min9_Unit = min9_Unit,
  
  this.min10 = min10,
  this.min10_Unit = min10_Unit,
  
  this.min11 = min11,
  this.min11_Unit = min11_Unit,
  
  this.min12 = min12,
  this.min12_Unit = min12_Unit,
  
  this.min13 = min13,
  this.min13_Unit = min13_Unit,
  
  this.min14 = min14,
  this.min14_Unit = min14_Unit,
  
  this.min15 = min15,
  this.min15_Unit = min15_Unit,
  
  this.min16 = min16,
  this.min16_Unit = min16_Unit,
  
  this.min17 = min17,
  this.min17_Unit = min17_Unit,
  
  this.min18 = min18,
  this.min18_Unit = min18_Unit;

}


// Functions run after click on add btn 
function submitform() {
  let Mypowerdiet = {};
  Mypowerdiet = new defineMaterial(
    Product_Name.value,
    Product_Quantity.value,
    Product_Unit.value, 
    Protein_Quantity.value , 
    Carb_Quantity.value , 
    Fat_Quantity.value, 
    Fibre_Quantity.value,

    // Vitamins details 

    vit1.value,
    vit1_Unit.value,

    vit2.value,
    vit2_Unit.value,

    vit3.value,
    vit3_Unit.value,

    vit4.value,
    vit4_Unit.value,

    vit5.value,
    vit5_Unit.value,

    vit6.value,
    vit6_Unit.value,

    vit7.value,
    vit7_Unit.value,

    vit8.value,
    vit8_Unit.value,

    vit9.value,
    vit9_Unit.value,

    vit10.value,
    vit10_Unit.value,

    vit11.value,
    vit11_Unit.value,

    vit12.value,
    vit12_Unit.value,

    vit13.value,
    vit13_Unit.value,

    // Minerals 

    min1.value,
    min1_Unit.value,

    min2.value,
    min2_Unit.value,

    min3.value,
    min3_Unit.value,

    min4.value,
    min4_Unit.value,

    min5.value,
    min5_Unit.value,

    min6.value,
    min6_Unit.value,

    min7.value,
    min7_Unit.value,

    min8.value,
    min8_Unit.value,

    min9.value,
    min9_Unit.value,

    min10.value,
    min10_Unit.value,

    min11.value,
    min11_Unit.value,

    min12.value,
    min12_Unit.value,

    min13.value,
    min13_Unit.value,

    min14.value,
    min14_Unit.value,

    min15.value,
    min15_Unit.value,

    min16.value,
    min16_Unit.value,

    min17.value,
    min17_Unit.value,

    min18.value,
    min18_Unit.value

    );
  completeData.push(Mypowerdiet);
  localStorage.setItem('Mypowerdiet', JSON.stringify(completeData));
  // showitemstouser();
  productform.reset();

};

