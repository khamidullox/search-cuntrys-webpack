import "../css/index.css";
import "./mode";
import sorov from "./request";
import { creatContryInfo } from "./updateUi";

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let state = urlParams.get("state");
let apiState = "https://restcountries.com/v3.1/";
sorov(apiState + state).then((city) => {
  creatContryInfo(city[0])
  
}).catch((err)=>{
    console.log(err.massage)
});
