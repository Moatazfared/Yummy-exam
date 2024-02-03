import { displayApi } from "./home.js"
export  function areaSearch() {

    $(document.querySelectorAll(".areaPage .row > div")).on("click", (e) => {
        console.log(e.target.getAttribute("data-area"))
        let type = "a"
        let search = "filter"
        displayApi(e.target.getAttribute("data-area"), search, type)

        document.querySelector(".areaPage").classList.add("d-none")
        document.querySelector(".mainPage").classList.remove("d-none")
        document.querySelector(".contSearch").classList.add("d-none")


    })

}