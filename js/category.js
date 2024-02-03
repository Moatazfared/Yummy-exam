
import { displayApi } from "./home.js"


export async function category() {


    let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")

    let data = await response.json()


    let result = data.categories

    let cartona = []

    for (let i = 0; i < result.length; i++) {
        cartona += `<div class=" col-sm-6  col-lg-3 col-md-4 id="${result[i].idCategory}">
        <div class="content position-relative overflow-hidden">
            <img class="img-fluid rounded-3  " src="${result[i].strCategoryThumb}" alt="">
            <div class="layout rounded-3 w-100 text-center fw-bold" data-id="${result[i].strCategory}">
            <p data-id="${result[i].strCategory}"class="para px-2 pt-2 fs-3">${result[i].strCategory}</p>
            <p data-id="${result[i].strCategory}" class="para px-2"> ${Array.from(result[i].strCategoryDescription).splice(0, 50).join("")}</p>
            </div>
        </div>
    </div>`
    }



    document.getElementById("myData").innerHTML = cartona


    await $(document.querySelectorAll("#myData > div")).on("click", (e) => {
        console.log(e.target.getAttribute("data-id"))
        let type = "c"
        let search = "filter"
        displayApi(e.target.getAttribute("data-id"), search, type)
    })

}
