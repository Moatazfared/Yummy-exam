import { displayApi } from "./home.js"


let searchByLetter = document.getElementById("searchByLetter");
let search = document.getElementById("search");

export function searchByFirstLetter(){
    searchByLetter.addEventListener("keyup",(e)=>{
        displayApi(e.target.value)
        document.querySelector(".mainPage").classList.remove("d-none")
    })
}
