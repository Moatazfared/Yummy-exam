


export async function displayApi(name = "Potato", search = "search", type = "s") {
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/${search}.php?${type}=${name}`)


    let result = await respone.json()

    let meals = result.meals

    let cartona = []

    for (let i = 0; i < meals.length; i++) {
        cartona += `<div class=" col-sm-6  col-lg-3 col-md-4 id="${meals[i].idMeal}">
        <div class="content position-relative overflow-hidden">
            <img class="img-fluid rounded-3  " src="${meals[i].strMealThumb}" alt="">
            <div class="layout rounded-3 w-100 d-flex align-items-center ps-2 fs-4 fw-bold" data-id="${meals[i].idMeal}">

                ${meals[i].strMeal
            }
            </div>
        </div>
    </div>`
    }

    document.getElementById("myData").innerHTML = cartona


    $(document.querySelectorAll("#myData > div")).on("click", (e) => {

        let clickedId = e.target.getAttribute("data-id")

        getDataById(clickedId)

        document.querySelector(".specData").classList.remove("d-none")
        document.querySelector(".mainPage").classList.add("d-none")

    })


    async function getDataById(clickedId) {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedId}`)
        let result = await data.json()
        console.log(result.meals[0])

        document.getElementById("specData").innerHTML = `

        

        <div class="col-lg-4">
                <img src="${result.meals[0].strMealThumb}" class="img-fluid rounded-3">
                <h4 class="text-white">${result.meals[0].strMeal}</h4>
            </div>
            <div class="col-lg-8 text-white">
                <h2>Instructions</h2>
                <p>${result.meals[0].strInstructions}</p>
                <p class="fs-4 fw-bold">Area :${result.meals[0].strArea}</p>
                <p class="fs-4 fw-bold">Category :${result.meals[0].strCategory}</p>
                <p class="fs-4 fw-bold">Recipes :</p>
                <div class="row recipes ps-2 ">
                    <div class="col-3">${result.meals[0].strIngredient1}</div>
                    <div class="col-3">${result.meals[0].strIngredient2}</div>
                    <div class="col-3">${result.meals[0].strIngredient3}</div>
                    <div class="col-3">${result.meals[0].strIngredient4}</div>
                    <div class="col-3">${result.meals[0].strIngredient5}</div>
                    <div class="col-3">${result.meals[0].strIngredient6}</div>
                    <div class="col-3">${result.meals[0].strIngredient7}</div>
                    <div class="col-3">${result.meals[0].strIngredient8}</div>
                    <div class="col-3">${result.meals[0].strIngredient9}</div>
                    <div class="col-3">${result.meals[0].strIngredient10}</div>
                    
                </div>

                <p class="fs-4 fw-bold">Tags :${result.meals[0].strTags}</p>
                <div class=" px-3 py-1 rounded-3 text-dark"
                    style="background-color: rgb(248,215,218);width: fit-content;">Soup</div>
                <span class="me-1 rounded-3 bg-success py-2 px-3 mt-3 d-inline-block"><a href="${result.meals[0].strSource}"
                        class="text-white text-decoration-none">source</a></span>
                <span class="me-1 rounded-3 bg-danger py-2 px-3 mt-3 d-inline-block"><a href="${result.meals[0].strYoutube}"
                        class="text-white text-decoration-none">Youtube</a></span>
            </div>
        
        `



    }



}