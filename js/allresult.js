// LOCALSTORAGE ACCESS 
const Mypowerdiet = JSON.parse(localStorage.getItem("Mypowerdiet"));
const dailyintakesls = JSON.parse(localStorage.getItem("dailyintakesls"));

// HTML ELEMENTS FOR DISPLAY TOTAL PROTEIN,FAT,CARB ,MICRONUTRIENTS AND MICROVITAMINS 
const Allresultprotein = document.getElementById("Allresultprotein");
const Allresultfat = document.getElementById("Allresultfat");
const Allresultcarb = document.getElementById("Allresultcarb");
const displaymicronutrients = document.getElementById("displaymicronutrients");
const displaymicrovitamins = document.getElementById("displaymicrovitamins");

let proteinpercentage = document.getElementById("proteinpercentage");
let proteinbarwidth = document.getElementById("proteinbarwidth");

let fatpercentage = document.getElementById("fatpercentage");
let fatbarwidth = document.getElementById("fatbarwidth");

let carbpercentage = document.getElementById("carbpercentage");
let carbbarwidth = document.getElementById("carbbarwidth");

// CUSTOM VARIABLES 
let mealprotein = {};
let setmealname = {};

let totalprotein = 0;
let totalfat = 0;
let totalcarb = 0;

let me = 0;
let we = 0;
let tea = 0;
let lea = 0;

let micronutrientsarray = [];
let microvitaminsarray = [];

let dietmicronutrientsarray = [];
let dietmicrovitaminsarray = [];

const nutrientsname = [
  "Boron",
  "Calcium",
  "Chlorine",
  "Chromium",
  "Copper",
  "Fluorine",
  "Iodine",
  "Iron",
  "Magnesium",
  "Manganese",
  "Molybdenum",
  "Nickel",
  "Phosphorus",
  "Potassium",
  "Selenium",
  "Sodium",
  "Vanadium",
  "Zinc",
];
const vitaminsname = [
  "Biotin",
  "Folate",
  "Vitamin A",
  "Vitamin B1 (thiamin)",
  "Vitamin B2 (riboflavin)",
  "Vitamin B3 (niacin)",
  "Vitamin B5 (patothenic acid)",
  "Vitamin B6 (pyridoxine)",
  "Vitamin B12 (cobalamine)",
  "Vitamin C (ascorbic acid)",
  "Vitamin D (cholecalciferol)",
  "Vitamin E (tocopherol)",
  "Vitamin K",
];

window.onload = () => {
  for (let first = 0; first < mealtimedata.length; first++) {
    let protein = 0;
    let fat = 0;
    let carb = 0;
    tea = 0;
    lea = 0;
    let displaymicronutrients1 = document.getElementById(
      `${mealtimedata[first].MealtimeName.replaceAll(" ","") + "displaymicronutrients"}`
    );
    let displaymicronutrients2 = document.getElementById(
      `${mealtimedata[first].MealtimeName.replaceAll(" ","") + "displaymicrovitamins"}`
    );
    for (
      let second = 0;
      second < mealtimedata[first].mealitemsinthis.length;
      second++
    ) {
      const element = mealtimedata[first].mealitemsinthis[second];
      slidemicronutrients(element);
      slidemicrovitamins(element);
      micronutrients(element);
      microvitamins(element);
      protein += checkme(element.foodname)[0] * element.fooditemvalue;
      fat += checkme(element.foodname)[1] * element.fooditemvalue;
      carb += checkme(element.foodname)[2] * element.fooditemvalue;

    }
    showmicronutrients(displaymicronutrients1,dietmicronutrientsarray); 
    showmicrovitamins(displaymicronutrients2,dietmicrovitaminsarray); 

    totalprotein += protein;
    totalfat += fat;
    totalcarb += carb;

    setmealname = {
      mealname: mealtimedata[first].MealtimeName,
      protein: protein,
      fat: fat,
      carb: carb,
    };
    mealprotein[first] = setmealname;
    let eleresultprotein = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "resultprotein"}`
    );
    let eleproteinpercentage = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "proteinpercentage"}`
    );
    let eleproteinbarwidth = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "proteinbarwidth"}`
    );

    let eleresultfat = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "resultfat"}`
    );
    let elefatpercentage = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "fatpercentage"}`
    );
    let elefatbarwidth = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "fatbarwidth"}`
    );

    let eleresultcarb = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "resultcarb"}`
    );
    let elecarbpercentage = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "carbpercentage"}`
    );
    let elecarbbarwidth = document.getElementById(
      `${setmealname.mealname.replaceAll(" ", "") + "carbbarwidth"}`
    );
    proteincalculate(
      setmealname.protein,
      eleresultprotein,
      eleproteinpercentage,
      eleproteinbarwidth
    );
    fatcalculate(
      setmealname.fat,
      eleresultfat,
      elefatpercentage,
      elefatbarwidth
    );
    carbcalculate(
      setmealname.carb,
      eleresultcarb,
      elecarbpercentage,
      elecarbbarwidth
    );
  }

  proteincalculate(
    totalprotein,
    Allresultprotein,
    proteinpercentage,
    proteinbarwidth
  );
  fatcalculate(totalfat, Allresultfat, fatpercentage, fatbarwidth);
  carbcalculate(totalcarb, Allresultcarb, carbpercentage, carbbarwidth);
  showmicronutrients(displaymicronutrients,micronutrientsarray);
  showmicrovitamins(displaymicrovitamins,microvitaminsarray);
  document.getElementById("preloader").style.display = "none";

};

// CALCULATING TOTAL PROTEIN 
function proteincalculate(
  totalprotein,
  Allresultprotein,
  proteinpercentage,
  proteinbarwidth
) {
  let percentageofprotein = Math.round(
    (Math.round(totalprotein) / dailyintakesls.protein) * 100
  );
  Allresultprotein.innerHTML = `Protein - ${Math.round(totalprotein)} /${
    dailyintakesls.protein
  }`;
  proteinpercentage.innerHTML = `${percentageofprotein}%`;
  if (percentageofprotein >= 100) {
    proteinbarwidth.style.width = "100%";
  } else {
    proteinbarwidth.style.width = `${percentageofprotein}%`;
  }
}

// CALCULATING TOTAL FAT 
function fatcalculate(totalfat, Allresultfat, fatpercentage, fatbarwidth) {
  let percentageoffat = Math.round(
    (Math.round(totalfat) / dailyintakesls.fat) * 100
  );
  Allresultfat.innerHTML = `Faty - ${Math.round(totalfat)} /${
    dailyintakesls.fat
  }`;
  fatpercentage.innerHTML = `${percentageoffat}%`;
  if (percentageoffat >= 100) {
    fatbarwidth.style.width = "100%";
  } else {
    fatbarwidth.style.width = `${percentageoffat}%`;
  }
}

// CALCULATING TOTAL CARB
function carbcalculate(totalcarb, Allresultcarb, carbpercentage, carbbarwidth) {
  let percentageofcarb = Math.round(
    (Math.round(totalcarb) / dailyintakesls.carb) * 100
  );
  Allresultcarb.innerHTML = `Carb - ${Math.round(totalcarb)} /${
    dailyintakesls.carb
  }`;
  carbpercentage.innerHTML = `${percentageofcarb}%`;
  if (percentageofcarb >= 100) {
    carbbarwidth.style.width = "100%";
  } else {
    carbbarwidth.style.width = `${percentageofcarb}%`;
  }
}

// CALCULATING PER PEICE PROTEIN ,FAT AND CARB
function checkme(foodname) {
  let perpeiceprotein;
  for (let i = 0; i < Mypowerdiet.length; i++) {
    const child = Mypowerdiet[i];
    if (child.productName == foodname) {
      perpeiceprotein = child.proteinQuantity / child.productQuantity;
      perpeicefat = child.fatQuantity / child.productQuantity;
      perpeicecarb = child.carbQuantity / child.productQuantity;
      return [perpeiceprotein, perpeicefat, perpeicecarb];
    }
  }
}

// CALUCULATING MICRONUTRIENTS 
function micronutrients(element) {
  let presetvalue = 100;
  for (let i = 0; i < Mypowerdiet.length; i++) {
    const child = Mypowerdiet[i];
    if (child.productName == element.foodname) {
      for (let index = 1; index <= 18; index++) {
        if (me != 0) {
          micronutrientsarray[index - 1] =
            Number(micronutrientsarray[index - 1]) +
            Number(child["min" + index] * element.fooditemvalue);
        } else {
          micronutrientsarray[index - 1] = Number(
            child["min" + index] * element.fooditemvalue
          );
        }
      }
    }
  }
  me++;
}

// CALCULATING MICROVITAMINS 
function microvitamins(element) {
  let presetvalue = 100;
  for (let i = 0; i < Mypowerdiet.length; i++) {
    const child = Mypowerdiet[i];
    if (child.productName == element.foodname) {
      for (let index = 1; index <= 13; index++) {
        if (we != 0) {
          microvitaminsarray[index - 1] =
            Number(microvitaminsarray[index - 1]) +
            Number(child["vit" + index] * element.fooditemvalue);
        } else {
          microvitaminsarray[index - 1] = Number(
            child["vit" + index] * element.fooditemvalue
          );
        }
      }
    }
  }
  we++;
}

// DISPLAYING micronutrients 
function showmicronutrients(displaymicronutrients,micronutrientsarray) {
  for (let j = 0; j < 18; j++) {
    let width;
    if (micronutrientsarray[j] >= 100) {
      width = 100;
    } else {
      width = micronutrientsarray[j];
    }
    displaymicronutrients.innerHTML += `<div class="w-1/2 pr-3">
  <div class="flex items-center justify-between">
    <span class="text-slate-600 text-xs"
      >${nutrientsname[j]}- ${micronutrientsarray[j]}/ 100g</span
    >
    <span
      class="px-2 py-1 text-xs text-purple-500 font-medium min-w-[46px] text-center"
      >${Math.round((micronutrientsarray[j] / 100) * 100)}%</span
    >
  </div>

  <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
    <div
      class="bg-purple-600 h-1 rounded"
      style="width:  ${width}%"
    ></div>
  </div>
</div>`;
  }
}

// DISPLAYING microvitamins
function showmicrovitamins(displaymicrovitamins,microvitaminsarray) {
  for (let j = 0; j < 13; j++) {
    let width;
    if (microvitaminsarray[j] >= 100) {
      width = 100;
    } else {
      width = microvitaminsarray[j];
    }
    displaymicrovitamins.innerHTML += `<div class="w-1/2 pr-3">
  <div class="flex items-center justify-between">
    <span class="text-slate-600 text-xs"
      >${vitaminsname[j]}- ${microvitaminsarray[j]}/ 100g</span
    >
    <span
      class="px-2 py-1 text-xs text-purple-500 font-medium min-w-[46px] text-center"
      >${Math.round((microvitaminsarray[j] / 100) * 100)}%</span
    >
  </div>

  <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
    <div
      class="bg-purple-600 h-1 rounded"
      style="width:  ${width}%"
    ></div>
  </div>
</div>`;
  }
}

// SET MICRONUTRIENTS FOR EACH MEAL TIME 

function slidemicronutrients(element) {
  for (let i = 0; i < Mypowerdiet.length; i++) {
    const child = Mypowerdiet[i];
    if (child.productName == element.foodname) {
      for (let index = 1; index <= 18; index++) {
          if (tea != 0) {
            dietmicronutrientsarray[index - 1] =
              Number(dietmicronutrientsarray[index - 1]) +
              Number(child["min" + index] * element.fooditemvalue);
          } else {
            dietmicronutrientsarray[index - 1] = Number(
              child["min" + index] * element.fooditemvalue
            );
          }
        }
        break;
      }
    }
    tea++;
}

// SET MICROVITAMINS FOR EACH MEAL TIME 

function slidemicrovitamins(element) {
  for (let i = 0; i < Mypowerdiet.length; i++) {
    const child = Mypowerdiet[i];
    if (child.productName == element.foodname) {
      for (let index = 1; index <= 13; index++) {
        if (lea != 0) {
          dietmicrovitaminsarray[index - 1] =
            Number(dietmicrovitaminsarray[index - 1]) +
            Number(child["vit" + index] * element.fooditemvalue);
        } else {
          dietmicrovitaminsarray[index - 1] = Number(
            child["vit" + index] * element.fooditemvalue
          );
        }
      }
    }
  }
  lea++;
}
