let ul = document.querySelector(".cards");
export let creatContrys = (conty) => {
  ul.innerHTML = "";
  conty.forEach((state) => {
    let commoName = state.name.common;
    let populetion = state.population;
    let region = state.region;
    let capital = state.capital ? state.capital[0] : "No Capital";
    let flag = state.flags.svg;

    let nevLi = document.createElement("li");

    nevLi.classList.add("cards__item");

    nevLi.innerHTML = `<a href="./about.html?state=/name/${commoName}">
    <img
      src=${flag}
      alt="algeria-flag"
      width="267"
      height="160"
    />
    <div class="cards__item-inner">
      <h3 class="cards__title">${commoName}</h3>
      <p class="population">Population: <span>${populetion}</span></p>
      <p class="region">Region: <span>${region}</span></p>
      <p class="capital">Capital: <span>${capital}</span></p>
    </div>
  </a> `;
    ul.appendChild(nevLi);
  });
};

// ui about
const cuntryInfoEl = document.querySelector(".country-info");

export let creatContryInfo = (countr) => {
  let {
    population,
    borders,
    capital,
    flags,
    name,
    region,
    tld,
    currencies,
    languages,
    subregion,
  } = countr;
  let oficalName = Object.values(name.nativeName)[0].official;
  let corremcies = Object.values(currencies)[0].name;
  let language = Object.values(languages);

  console.log(language);
  cuntryInfoEl.innerHTML = `

        
    <img
        class="country-info__img"
        src=${flags.svg}
        alt="germany-flag"
        width="560"
        height="400"
    />
  <div class="country-info__content">
    <h2>${name.common}</h2>
    <ul class="country-info__list">
      <li class="country-info__item">
        <p class="name">
          Native Name: 
          <span>${oficalName}</span>
        </p>
        <p class="population">
          Population:
          <span>${population}</span>
        </p>
        <p class="region">
          Region:
          <span>${region}</span>
        </p>
        <p class="sub-region">
          Sub Region:
          <span>${subregion}</span>
        </p>
        <p class="capital">
          Capital:
          <span>${capital}</span>
        </p>
      </li>
      <li class="country-info__item">
        <p class="name">
          Top Level Domain:
          <span>${tld}</span>
        </p>
        <p class="population">
          Currencies:
          <span>${corremcies}</span>
        </p>
        <p class="region">
          Languages:
          <span>${language}</span>
        </p>
      </li>
    </ul>

    <div class="country-info__borders">
      <h3>Border Countries:</h3>
        ${
          borders
            ? borders.map((border) => {
                return `
            <a href="./about.html?state=/alpha/${border}">${border}</a>
            `;
              })
            : "No Borders"
        }
    </div>
  </div>


    `;
};
