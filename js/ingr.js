import { displayApi } from "./home.js"


export async function ingredient() {

    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let result = await response.json()
    let data = result.meals

    console.log(data)

    let cartona = ""

    for (let i = 0; i < 20; i++) {
        cartona += `<div class="col-lg-3 col-md-4 col-sm-6 position-relative text-white text-center ">
          <i class="fa-solid fa-drumstick-bite fa-4x"></i>
          <h3>${data[i].strIngredient}</h3>
          <p> ${Array.from(data[i].strDescription).splice(0, 109).join("")} </p>
          <div data-name="${data[i].strIngredient}" class="cover"></div>
      </div>
`
    }
    document.getElementById("dataIng").innerHTML = cartona



    await $(document.querySelectorAll("#dataIng > div")).on("click", (e) => {
        console.log(e.target.getAttribute("data-name"))
        let type = "i"
        let search = "filter"
        displayApi(e.target.getAttribute("data-name"), search, type)
        document.querySelector(".mainPage").classList.remove("d-none")
        document.querySelector(".ing").classList.add("d-none")
        

    })


}