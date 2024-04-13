import "../css/index.css";
import sorov from "./request";
import { creatContrys } from "./updateUi";
import "./filtir"
import "./mode"
let api = "https://restcountries.com/v3.1/all";

sorov(api)
  .then((data) => {
    creatContrys(data);
  })
  .catch((error) => {
    console.log(error);
  });
