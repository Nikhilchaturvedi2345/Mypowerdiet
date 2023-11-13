const addmealtimeformsection = document.getElementById(
  "addmealtimeformsection"
);
const addmealtimehere = document.getElementById("addmealtimehere");
const nomealtimetillnow = document.getElementById("nomealtimetillnow");
const addmoremeal = document.getElementById("addmoremeal");
const editmealtimesection = document.getElementById("editmealtimesection");
let selectedmealtime;
var iteminputid = [], itemselectid = []; 

// for Element serarch
let Mypowerdiet = localStorage.getItem("Mypowerdiet");
var ele = JSON.parse(Mypowerdiet);
const allitemlist = document.getElementById("allitemlist");
const searchmealitem = document.getElementById("searchmealitem");

let mealtimedataarray = JSON.parse(localStorage.getItem("mealtimedata"));

window.addEventListener("load", runafterreload());

function runafterreload() {
  let mealtimedata = JSON.parse(localStorage.getItem("mealtimedata"));
  if (mealtimedata == null || mealtimedata.length == 0) {
    nomealtimetillnow.classList.remove("hidden");
    addmoremeal.classList.add("hidden");
  } else {
    nomealtimetillnow.classList.add("hidden");
    addmoremeal.classList.remove("hidden");
    showmealtimetouser();
  }
}

if (mealtimedataarray === null) {
  console.log("No Data is available till now");
  mealtimedataarray = [];
}

function closemealtimeform() {
  MealtimeName.value = "";
  addmealtimeformsection.classList.add("hidden");
}
function showmealtimefillform() {
  addmealtimeformsection.classList.remove("hidden");
}

function mealtimetemplate(name) {
  this.MealtimeName = name;
}

function mealtimeformsubmited() {
  let MealtimeName = document.getElementById("MealtimeName");
  let mealtimedataarray = JSON.parse(localStorage.getItem("mealtimedata"));
  let mealtimedataobj = {};
  mealtimedataobj = new mealtimetemplate(MealtimeName.value);
  if(mealtimedataarray == null){
    mealtimedataarray = [];
  }
    mealtimedataarray.push(mealtimedataobj);
    localStorage.setItem("mealtimedata", JSON.stringify(mealtimedataarray));
    showmealtimetouser();
    addmealtimeformsection.classList.add("hidden");
    MealtimeName.value = "";
  runafterreload();
}
function showmealtimetouser() {
  let mealtimedata = JSON.parse(localStorage.getItem("mealtimedata"));
  addmealtimehere.innerHTML = "";

  for (let index = 0; index < mealtimedata.length; index++) {
    
    addmealtimehere.innerHTML += `<section class="rounded-lg shadow-lg bg-white my-4 mx-3 p-5">
    <div class="flex justify-between  pr-3">
    <h1 class="text-xl font-semibold capitalize">${mealtimedata[index].MealtimeName}</h1>
    <p><a class="text-blue-500 font-semibold cursor-pointer  editmehere mx-4 " onclick = nowyoucanedit(this)>Edit </a><span href="" class=" text-white bg-red-600 px-2 py-1 rounded font-semibold cursor-pointer  editmehere" onclick = deletemealtime(this)> delete</span></p>
    </div>
    <div> 
    <ul class="mt-3" id="innerpartid${index}">
    </ul>
    </div>
    </section>`;
    if (mealtimedata[index].mealitemsinthis != null) {
      
      for (let inner = 0; inner < mealtimedata[index].mealitemsinthis.length; inner++)
      {
        var innerpart = mealtimedata[index].mealitemsinthis[inner].foodname;
        let innerpartid = document.getElementById(`innerpartid${index}`);
      innerpartid.innerHTML += `<li id="${mealtimedata[index].MealtimeName}" class="pr-6 flex justify-between"><span class="w-9/12">${innerpart}</span><span class="">${mealtimedata[index].mealitemsinthis[inner].fooditemvalue}</span><a onclick="deleteme(this)"> <i class="fa-solid fa-xmark " style="color: #8f8f8f;"></i></a></li>
      `
      
    }
  }
  }
}

function deletemealtime(elem) {
  let oneswhodeleted =
    elem.parentElement.parentElement.firstElementChild.innerHTML;
    let mealtimedataarray = JSON.parse(localStorage.getItem("mealtimedata"));
  for (let index = 0; index < mealtimedataarray.length; index++) {
    if (mealtimedataarray[index].MealtimeName == oneswhodeleted) {
      mealtimedataarray.splice(index, 1);
      localStorage.setItem("mealtimedata", JSON.stringify(mealtimedataarray));
      showmealtimetouser();

      break;
    }
  }
  runafterreload();
}

// Edit any Item to add diets
function nowyoucanedit(meal) {
  editmealtimesection.classList.remove("hidden");
  editmealtimesection.classList.add("flex");
  selectedmealtime =
    meal.parentElement.parentElement.firstElementChild.innerHTML;
    // additemlisttomeal()
    runme(selectedmealtime);
}

// searching an element in array

if(ele != null){
  console.log(ele[0].productName)
  for (let index = 0; index < 7; index++) {
    ele[index].productName.replaceAll(" ", "");
    allitemlist.innerHTML += `<li class="text-lg py-2 font-extralight mealtimedietlistvalue">
    <input
    type="checkbox"
    name="${ele[index].productName.replaceAll(" ", "")}" 
    id="${ele[index].productName.replaceAll(" ", "")}"
    onclick = "showinputs(this)"
    class="mx-4 mt-3  before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10 "
    />${ele[index].productName}</li>
    <div class="hidden justify-between w-full px-11 py-2 text-sm" id="${ele[index].productName.replaceAll(" ", "")}box">
    <input
      type="number"
      name="vit1"
      id="${ele[index].productName.replaceAll(" ", "")}input"
      step="0.01"
      value="1"
      required
      class="outline-none border-y-2 border-pink-500 border-solid w-5/12 text-center"
    />
    <div
      class="custom-select border-y-2 border-pink-500 border-solid w-6/12 text-center py-1"
    >
      <select name="${ele[index].productName.replaceAll(" ", "")}" id="${ele[index].productName.replaceAll(" ", "")}option" required class="bg-white text-gray-900 outline-none text-sm rounded-lg hover:outline-none block w-full p-1 aria-selected:bg-red-700 select-none" >
        <option value="Grams" >gram</option>
        <option value="Grams" >gram</option>
        <option value="PerPeice" >Peice</option>
      </select>
    </div>
  </div>
    <hr>`;
  }
}
  searchmealitem.addEventListener("input", () => {
    let inputvalue = searchmealitem.value;
  let mealtimedietlistvalue = document.getElementsByClassName(
    "mealtimedietlistvalue"
  );
  for (let index = 0; index < mealtimedietlistvalue.length; index++) {
    const element = mealtimedietlistvalue[index].childNodes[2].nodeValue;
    mealtimedietlistvalue[index].classList.add("hidden");
    if (element.toLowerCase().includes(inputvalue)) {
      if (mealtimedietlistvalue[index].classList.contains("hidden")) {
        mealtimedietlistvalue[index].classList.remove("hidden");
      }
    }
  }
});

function closesearchform() {
  editmealtimesection.classList.add("hidden");
}


function runme(selectedmealtime) {
  const forcheckedele = document.querySelectorAll(
    'ul#allitemlist input[type="checkbox"]'
  );
  let mealtimedata = JSON.parse(localStorage.getItem("mealtimedata"));
  for (let menu = 0; menu < mealtimedata.length; menu++) {
    const bhag = mealtimedata[menu];
    if (bhag.MealtimeName == selectedmealtime) {
      if(bhag.mealitemsinthis != null){
 
      for (let kar = 0; kar < bhag.mealitemsinthis.length; kar++) {
        for (let index = 0; index < forcheckedele.length; index++) {
          if (
            bhag.mealitemsinthis[kar].foodname.replaceAll(" ", "") ==
            forcheckedele[index].id
          ) 
          {
            forcheckedele[index].checked =1;
            document.getElementById(`${forcheckedele[index].id}input`).value = bhag.mealitemsinthis[kar].fooditemvalue;
            document.getElementById(`${forcheckedele[index].id}option`).value = bhag.mealitemsinthis[kar].fooditemtype;
            showinputs(forcheckedele[index])
          }
        }
      }
             
    }
    }
  }
}



function additemlisttomeal() {
  const forcheckedele = document.querySelectorAll(
    'ul#allitemlist input[type="checkbox"]'
  );
  const meal = [];


  let mealtimedata = JSON.parse(localStorage.getItem("mealtimedata"));
  
  for (let menu = 0; menu < mealtimedata.length; menu++) {
    const bhag = mealtimedata[menu];

    if (bhag.MealtimeName == selectedmealtime) {
      bhag.mealitemsinthis;
      

      for (let check = 0; check < forcheckedele.length; check++) {
        const element = forcheckedele[check];
        if (element.checked == 1) {
          for (let suru = 0; suru < iteminputid.length; suru++) {
            const item = iteminputid[suru];
            if (item.includes(element.id)) {           
              var item2 = document.getElementById(item);
            }
          }
          for (let suru = 0; suru < iteminputid.length; suru++) {
            const item4 = itemselectid[suru];
            if (item4.includes(element.id)) {    
              var item3 = document.getElementById(item4);
            }
          }
          let obj = {
            foodname : element.parentElement.innerText.replace(/(\r\n|\n|\r)/gm, ""),
            fooditemvalue : item2.value,
            fooditemtype : item3.value
          }
          meal.push(obj);
          bhag.mealitemsinthis = meal;
        }
      }
      localStorage.setItem("mealtimedata", JSON.stringify(mealtimedata));
    }
  }
  editmealtimesection.classList.add("hidden");
  showmealtimetouser();
}


function showinputs(ele) {
  if(ele.checked){

   document.getElementById(`${ele.id}box`).style.display = "flex";
   iteminputid.push(document.getElementById(`${ele.id}input`).id);
   itemselectid.push(document.getElementById(`${ele.id}option`).id);
  }
  else{
    document.getElementById(`${ele.id}box`).style.display = "none";
    iteminputid.pop(document.getElementById(`${ele.id}input`).id);
    itemselectid.pop(document.getElementById(`${ele.id}option`).id);
  }
}


function deleteme(deleteme) {
  let mealtimedata = JSON.parse(localStorage.getItem("mealtimedata"));
  let id  =  deleteme.parentElement.id;
  for (let j = 0; j < mealtimedata.length; j++) {
    const jack = mealtimedata[j].MealtimeName;    
    if(id == jack){
      for (let k = 0; k < mealtimedata[j].mealitemsinthis.length; k++) {
        const oggy = mealtimedata[j].mealitemsinthis[k].foodname;
        if(oggy == deleteme.parentElement.firstElementChild.innerHTML){
          mealtimedata[j].mealitemsinthis.splice(k,1);
          mealtimedata =  mealtimedata;
          localStorage.setItem("mealtimedata",JSON.stringify(mealtimedata))
          showmealtimetouser()
          break;
        }
      }
      break;
    }
  }

}