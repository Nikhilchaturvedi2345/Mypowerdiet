// HTML ELEMENTS 
let showhour = document.getElementById("showhour");
let showmin = document.getElementById("showmin");
let showsec = document.getElementById("showsec");
let showtimezone = document.getElementById("showtimezone");

let setdailyintakeprotein = document.getElementById("setdailyintakeprotein");
let setdailyintakecarb = document.getElementById("setdailyintakecarb");
let setdailyintakefat = document.getElementById("setdailyintakefat");
let setdailyintakecalories = document.getElementById("setdailyintakecalories");

let pro = document.getElementById("pro");
let carb = document.getElementById("carb");
let fat = document.getElementById("fat");
let cal = document.getElementById("cal");

// CLOCK FUNCTION 
setInterval(() => {
  // for Hours

  showhour.innerHTML = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
  });

  //   for minutes

  showmin.innerHTML = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    minute: "numeric",
  });

  //   for Seconds

  showsec.innerHTML = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    second: "2-digit",
  });

  //   For AM and PM

  new Date()
    .toLocaleTimeString("en-US", {
      hour: "numeric",
    })
    .includes("PM")
    ? (showtimezone.innerHTML = "PM")
    : (showtimezone.innerHTML = "AM");
}, 1000);



window.onload = function () {
  let dailyintakesls = JSON.parse(localStorage.getItem("dailyintakesls"));
  if (dailyintakesls != null) {
    setdailyintakeprotein.value = dailyintakesls.protein;
    setdailyintakecarb.value = dailyintakesls.carb;
    setdailyintakefat.value = dailyintakesls.fat;
    setdailyintakecalories.value = dailyintakesls.calories;
    showdailyintakes(
      dailyintakesls.protein,
      dailyintakesls.carb,
      dailyintakesls.fat,
      dailyintakesls.calories
      );
    }
    document.getElementById("preloader").style.display = "none";
  };
  let dailyintakes = {
    protein: setdailyintakeprotein.value,
    carb: setdailyintakecarb.value,
    fat: setdailyintakefat.value,
    calories: setdailyintakecalories.value,
  };

// FOR SETIN PROTEIN VALUE TO LOCAL STORAGE 
function setdailyprotein() {
  dailyintakes.protein = setdailyintakeprotein.value;
  dailyintakes.carb = setdailyintakecarb.value;
  dailyintakes.fat = setdailyintakefat.value;
  dailyintakes.calories = setdailyintakecalories.value;
  localStorage.setItem("dailyintakesls", JSON.stringify(dailyintakes));
  showdailyintakes(setdailyintakeprotein.value, setdailyintakecarb.value, setdailyintakefat.value, setdailyintakecalories.value)
}


// FOR DISPLAYING IN HTML 
function showdailyintakes(protein, carbo, fato, calo) {
  protein ? (pro.innerHTML = protein) : (pro.innerHTML = "0");
  carbo ? (carb.innerHTML = carbo) : (carb.innerHTML = "0");
  fato ? (fat.innerHTML = fato) : (fat.innerHTML = "0");
  calo ? (cal.innerHTML = calo) : (cal.innerHTML = "0");
}
