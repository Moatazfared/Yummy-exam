import { displayApi } from "./home.js"

let searchByName = document.getElementById("searchByName");
let search = document.getElementById("search");



export function searchName() {
    search.addEventListener("click", () => {
        document.querySelector(".contSearch").classList.remove("d-none")
        document.querySelector(".mainPage").classList.add("d-none")
        document.querySelector("#contForm").classList.add("d-none")
        document.querySelector(".areaPage").classList.add("d-none")
        document.querySelector(".ing").classList.add("d-none")
        document.querySelector(".specData").classList.add("d-none")


        searchByName.addEventListener("keyup", (e) => {
            document.querySelector(".mainPage").classList.remove("d-none");
            displayApi(e.target.value)

        })
    })
}

