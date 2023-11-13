let additemshere = document.getElementById("additemshere");
let nothingishere = document.getElementById("nothingishere");
let allitemstag = document.getElementById("allitemstag");

let completedData = JSON.parse(localStorage.getItem("Mypowerdiet"));
let obj = [];
let j;

window.addEventListener("load", runafterreload());

function runafterreload() {
  let completedData = JSON.parse(localStorage.getItem("Mypowerdiet"));
  if (completedData.length == 0) {
    nothingishere.style.display = "flex";
    allitemstag.style.display = "none";
    console.log("No Data is available till now");
    completedData = [];
  } else {
    nothingishere.style.display = "none";
    allitemstag.style.display = "block";
    showitemstouser();
  }
}

// Show all added poduct to user using looping
function showitemstouser() {
  let Mypowerdiet = JSON.parse(localStorage.getItem("Mypowerdiet"));
  additemshere.innerHTML = "";
  for (let index = 0; index < Mypowerdiet.length; index++) {
    additemshere.innerHTML += `<section class="rounded-lg shadow-lg bg-white my-4 mx-3 p-5">
      <div class="flex justify-between  pr-3">
          <h1 class="text-lg font-semibold text-green-600 w-6/12">${Mypowerdiet[index].productName}</h1>
          <p class=""><a href="material.html" class="text-blue-500 font-semibold underline underline-offset-4 editmehere px-1" onclick = nowyoucanedit(this)>Edit</a><span href="" class=" text-white bg-red-600 py-1 rounded font-semibold cursor-pointer editmehere px-2 mx-1" onclick = deletemealtime(this)>delete </span></p>
      </div>
      </section>`;
  }
}
function nowyoucanedit(ele) {
  let calledfunctionis =
    ele.parentElement.parentElement.firstElementChild.innerHTML;
  if (localStorage.getItem("calledfunctionis") != null) {
    localStorage.removeItem("calledfunctionis");
    localStorage.setItem("calledfunctionis", JSON.stringify(calledfunctionis));
  } else {
    localStorage.setItem("calledfunctionis", JSON.stringify(calledfunctionis));
  }
}
function deletemealtime(elem) {
  let oneswhodeleted =
    elem.parentElement.parentElement.firstElementChild.innerHTML;
    let Mypowerdietarray = JSON.parse(localStorage.getItem("Mypowerdiet"));
    
  for (let index = 0; index < Mypowerdietarray.length; index++) {
    if (Mypowerdietarray[index].productName == oneswhodeleted) {
      Mypowerdietarray.splice(index, 1);
      localStorage.setItem("Mypowerdiet", JSON.stringify(Mypowerdietarray));
      break;
    }
  }
  runafterreload();
  showitemstouser();
}