let serchForm = document.querySelector(".search");

serchForm.search.addEventListener("input", () => {
  let input = serchForm.search.value.toLowerCase();
  let cardsItem = document.querySelectorAll(".cards__item");
  let cardsTitle = document.querySelectorAll(".cards__title");
  cardsTitle.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(input)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

let searchSelect = document.querySelectorAll(".search__select-list li ");
let serchRegion = document.querySelector(".search__select span");

import { creatContrys } from "./updateUi";
import sorov from "./request";

searchSelect.forEach((region) => {
  region.addEventListener("click", () => {
    serchRegion.textContent = region.textContent;
    let filtrApi;

    if (region.textContent == "All") {
      filtrApi = "https://restcountries.com/v3.1/all";
    } else {
      filtrApi = `https://restcountries.com/v3.1/region/${region.textContent} `;
    }

    sorov(filtrApi).then((data)=>{
        creatContrys(data)
    }).catch((err)=>{
        console.error(err);
    })

  });
});
