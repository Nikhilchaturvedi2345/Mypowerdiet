let Mypowerdiet = JSON.parse(localStorage.getItem("Mypowerdiet"));
let calledfunctionis = JSON.parse(localStorage.getItem("calledfunctionis"));

  const element = calledfunctionis;
  for (j = 0; j < Mypowerdiet.length; j++) {
      if (Mypowerdiet[j].productName == calledfunctionis) {
        console.log("bata naa batata kyu nahi")

      document.getElementById(`Product_Name`).value =
        Mypowerdiet[j][`productName`];

      document.getElementById(`Product_Quantity`).value =
        Mypowerdiet[j][`productQuantity`];

      document.getElementById(`Product_Unit`).value =
        Mypowerdiet[j][`productUnit`];

      document.getElementById(`Protein_Quantity`).value =
        Mypowerdiet[j][`proteinQuantity`];

      document.getElementById(`Carb_Quantity`).value =
        Mypowerdiet[j][`carbQuantity`];

      document.getElementById(`Fat_Quantity`).value =
        Mypowerdiet[j][`fatQuantity`];

      document.getElementById(`Fibre_Quantity`).value =
        Mypowerdiet[j][`fibreQuantity`];

      for (let index = 1; index < 14; index++) {
        document.getElementById(`vit${index}`).value =
          Mypowerdiet[j][`vit${index}`];
        document.getElementById(`vit${index}_Unit`).value =
          Mypowerdiet[j][`vit${index}_Unit`];
      }
      for (let ind = 1; ind < 19; ind++) {
        document.getElementById(`min${ind}`).value =
          Mypowerdiet[j][`min${ind}`];
        document.getElementById(`min${ind}_Unit`).value =
          Mypowerdiet[j][`min${ind}_Unit`];
      }
      break;
    }
  }


function submiteditedform() {
  for (let index = 1; index < 14; index++) {
    Mypowerdiet[j][`vit${index}`] = document.getElementById(
      `vit${index}`
    ).value;
    Mypowerdiet[j][`vit${index}_Unit`] = document.getElementById(
      `vit${index}_Unit`
    ).value;

    Mypowerdiet[j][`min${index}`] = document.getElementById(
      `min${index}`
    ).value;
    Mypowerdiet[j][`min${index}_Unit`] = document.getElementById(
      `min${index}_Unit`
    ).value;

    Mypowerdiet[j][`productName`] =
      document.getElementById(`Product_Name`).value;

    Mypowerdiet[j][`productQuantity`] =
      document.getElementById(`Product_Quantity`).value;

    Mypowerdiet[j][`productUnit`] =
      document.getElementById(`Product_Unit`).value;

    Mypowerdiet[j][`proteinQuantity`] =
      document.getElementById(`Protein_Quantity`).value;

    Mypowerdiet[j][`carbQuantity`] =
      document.getElementById(`Carb_Quantity`).value;

    Mypowerdiet[j][`fatQuantity`] =
      document.getElementById(`Fat_Quantity`).value;

    Mypowerdiet[j][`fibreQuantity`] =
      document.getElementById(`Fibre_Quantity`).value;

    closeform();
  }
  localStorage.setItem("Mypowerdiet", JSON.stringify(Mypowerdiet));
}
function closeform() {
    window.history.go(-1)  
}