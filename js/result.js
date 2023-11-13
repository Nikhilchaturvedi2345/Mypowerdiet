let top_Navigation = document.getElementById("top_Navigation");
let mealtimedata = JSON.parse(localStorage.getItem("mealtimedata"));
let content_box = document.getElementById("content_box");
let setfirstonly = true;
let what;
for (let i = 0; i < mealtimedata.length; i++) {
  const element = mealtimedata[i];
  setfirstonly ? (what = "block") : (what = "hidden");
  top_Navigation.innerHTML += `
  <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
  <a class="text-xs font-bold uppercase px-7 py-3 shadow-lg rounded block leading-normal text-purple-600 bg-white" onclick="changeAtiveTab(event,'tab-${element.MealtimeName.replaceAll(
    " ",
    ""
  )}')">
    <i class="fas fa-fa-space-shuttle text-base mr-1"></i>  ${element.MealtimeName.replaceAll(
      " ",
      ""
    )}
  </a>
</li>
        `;
  content_box.innerHTML += `
  <div class="hidden" id="tab-${element.MealtimeName.replaceAll(" ", "")}">
  <div
  class="flex justify-center content-center items-center px-3 bg-slate-100 mt-3"
>
  <div
  class="bg-white p-8 shadow-lg shadow-slate-200 rounded-2xl w-full md:w-2/3 lg:w-1/3"
>
  <h2 class="text-xl font-bold pb-7 capitalize">${element.MealtimeName.replaceAll(
    " ",
    ""
  )}</h2>
  <div class="flex items-center justify-between">
    <span class="text-slate-400 text-md" id="${element.MealtimeName.replaceAll(
      " ",
      ""
    )}resultprotein">Protein 26/45g</span>
    <span
      class="px-2 py-1 bg-purple-100 rounded-lg text-xs text-purple-500 font-medium min-w-[46px] text-center" id="${element.MealtimeName.replaceAll(
        " ",
        ""
      )}proteinpercentage"
      >0%</span
    >
  </div>

  <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
    <div
      class="bg-blue-600 h-1 rounded w-16"
      id="${element.MealtimeName.replaceAll(" ", "")}proteinbarwidth"
    ></div>
  </div>

  <div class="flex items-center justify-between">
    <span class="text-slate-400 text-md" id="${element.MealtimeName.replaceAll(
      " ",
      ""
    )}resultfat">Fat 35/80g</span>
    <span
      class="px-2 py-1 bg-purple-100 rounded-lg text-xs text-purple-500 font-medium min-w-[46px] text-center" id="${element.MealtimeName.replaceAll(
        " ",
        ""
      )}fatpercentage"
      >25%</span
    >
  </div>

  <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
    <div
      class="bg-yellow-600 h-1 rounded"
      id="${element.MealtimeName.replaceAll(" ", "")}fatbarwidth"
    ></div>
  </div>

  <div class="flex items-center justify-between">
    <span class="text-slate-400 text-md" id="${element.MealtimeName.replaceAll(
      " ",
      ""
    )}resultcarb"
      >Carbohydrate 745/900g</span
    >
    <span
      class="px-2 py-1 bg-purple-100 rounded-lg text-xs text-purple-500 font-medium min-w-[46px] text-center" id="${element.MealtimeName.replaceAll(
        " ",
        ""
      )}carbpercentage"
      >50%</span
    >
  </div>

  <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
    <div
      class="bg-green-600 h-1 rounded"
      id="${element.MealtimeName.replaceAll(" ", "")}carbbarwidth"
    ></div>
  </div>
  </div>


  </div>
  <!-- Micronutrients bars Start -->
  <div class="mx-auto my-2 px-3 w-full">
    <!-- The First FAQ -->
    <details class="bg-white rounded-xl duration-300 shadow-md">
      <summary
        class="bg-inherit px-7 py-3 text-lg  cursor-pointer font-semibold  text-blue-500"
        style="color: rgb(162, 95, 23);"
        >
          Micronutrients 
          <span class="float-right ">
            <img
              src="./images/apple.png"
              width="25px"
              height="25px"
              alt="logo"
            />
          </span>
      </summary>
      <div
        class="bg-white px-5 py-3 border-t border-gray-300 text-sm font-light rounded-b-xl"
      >
        <div
          class="flex justify-center content-center items-center px-1"
        >
          <div
            class="bg-white rounded-2xl w-full md:w-2/3 lg:w-1/3 flex justify-between flex-wrap" id="${element.MealtimeName.replaceAll(
              " ",
              ""
            )}displaymicronutrients"
          >
          </div>
        </div>
      </div>
    </details>
  </div>
  <!-- Micronutrients bars END -->

  <!-- Microvitamins bars Start -->
  <div class="mx-auto px-3 w-full">
    <!-- The First FAQ -->
    <details
      class="bg-white rounded-xl duration-300 mb-10 shadow-md"
    >
      <summary
        class="bg-inherit px-7 py-3 text-lg text-blue-500 cursor-pointer font-semibold"
        style="color: #c9c442;"
      >
        Microvitamins
        <span class="float-right ">
          <img
            src="./images/lemon.png"
            width="25px"
            height="25px"
            alt="logo"
          />
        </span>
      </summary>
      <div
        class="bg-white px-5 py-3 border-t border-gray-300 text-sm font-light rounded-b-xl"
      >
        <div
          class="flex justify-center content-center items-center px-1"
        >
          <div
            class="bg-white rounded-2xl w-full md:w-2/3 lg:w-1/3 flex justify-between flex-wrap" id="${element.MealtimeName.replaceAll(
              " ",
              ""
            )}displaymicrovitamins"
          >

          </div>
        </div>
      </div>
    </details>
  </div>
  <!-- Micronutrients bars END -->

</div>

    
`;
  setfirstonly = false;
}

function changeAtiveTab(event, tabID) {
  let element = event.target;
  while (element.nodeName !== "A") {
    element = element.parentNode;
  }
  let ulElement = element.parentNode.parentNode;
  let aElements = ulElement.querySelectorAll("li > a");
  tabContents = document
    .getElementById("tabs-id")
    .querySelectorAll(".tab-content > div");
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].classList.remove("text-white");
    aElements[i].classList.remove("bg-purple-600");
    aElements[i].classList.add("text-purple-600");
    aElements[i].classList.add("bg-white");
    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
  }
  element.classList.remove("text-purple-600");
  element.classList.remove("bg-white");
  element.classList.add("text-white");
  element.classList.add("bg-purple-600");
  document.getElementById(tabID).classList.remove("hidden");
  document.getElementById(tabID).classList.add("block");
}
