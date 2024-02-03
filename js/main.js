import { displayApi } from "./home.js"
import { searchName } from "./searchName.js"
import { searchByFirstLetter } from "./searchByFirstLetter.js"
import { category } from "./category.js"
import { areaSearch } from "./area.js"
import { ingredient } from "./ingr.js"

let slider = document.getElementById("slider")
let iconSlider = document.getElementById("iconSlider")



iconSlider.onclick = function () {
    slider.classList.toggle("open")
    iconSlider.innerHTML = `<span class="d-inline-block fs-1 fw-bolder">X</span>`
    if (slider.classList.contains("open")) {
        iconSlider.innerHTML = `<span class="d-inline-block fs-1 fw-bolder">X</span>`

    } else {
        iconSlider.innerHTML = `<i  class="fa-solid open-close-icon fa-2x fa-align-justify"></i>`


    }


}


displayApi()
searchName()
searchByFirstLetter()



let categoryli = document.getElementById("categoryli")

categoryli.addEventListener("click", () => {
    category()
    document.querySelector(".contSearch").classList.add("d-none")
    document.querySelector(".mainPage").classList.remove("d-none")
    document.querySelector(".areaPage").classList.add("d-none")
    document.querySelector(".ing").classList.add("d-none")
    document.querySelector("#contForm").classList.add("d-none")

    document.querySelector(".specData").classList.add("d-none")



})


let AreaLi = document.getElementById("AreaLi")

AreaLi.addEventListener("click", () => {
    document.querySelector(".contSearch").classList.add("d-none")
    document.querySelector(".areaPage").classList.remove("d-none")
    document.querySelector(".mainPage").classList.add("d-none")
    document.querySelector(".ing").classList.add("d-none")
    document.querySelector("#contForm").classList.add("d-none")
    areaSearch()
    document.querySelector(".specData").classList.add("d-none")

})

let ingLi = document.getElementById("ingLi")

ingLi.addEventListener("click", () => {
    document.querySelector(".contSearch").classList.add("d-none")
    document.querySelector(".ing").classList.remove("d-none")
    document.querySelector(".mainPage").classList.add("d-none")
    document.querySelector(".areaPage").classList.add("d-none")
    document.querySelector("#contForm").classList.add("d-none")
    document.querySelector(".specData").classList.add("d-none")
    ingredient()

})





let inpName = document.getElementById("inpName")
let inpEmail = document.getElementById("inpEmail")
let inpNumber = document.getElementById("inpNumber")
let inpAge = document.getElementById("inpAge")
let inpPassword = document.getElementById("inpPassword")
let inpRePassword = document.getElementById("inpRePassword")
let submitBtn = document.getElementById("submitBtn")





function validateName(name) {
    let pattern = /^[A-Za-z\s]+$/;
    let isValid = pattern.test(name);

    return isValid
}

function validateEmail(email) {

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let isValid = pattern.test(email);

    return isValid;
}



function validatePhoneNumber(number) {

    var pattern = /^(010|012|011|015)\d{8}$/;


    var isValid = pattern.test(number);

    return isValid;
}


function validatePassword(password) {

    var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    var isValid = pattern.test(password);

    return isValid;
}



function validateAge(age) {

    var pattern = /^(?:[1-9][0-9]|99)$/;


    var isValid = pattern.test(age);

    return isValid;
}


let x = 0

inpName.addEventListener("input", (e) => {
    if (validateName(e.target.value)) {
        $("#alertName").fadeOut()



    } else {
        $("#alertName").fadeIn()

    }
})
inpEmail.addEventListener("input", (e) => {
    if (validateEmail(e.target.value)) {
        $("#alertEmail").fadeOut()


    } else {
        $("#alertEmail").fadeIn()

    }
})
inpNumber.addEventListener("input", (e) => {
    if (validatePhoneNumber(e.target.value)) {
        $("#alertNumber").fadeOut()


    } else {
        $("#alertNumber").fadeIn()

    }
})
inpAge.addEventListener("input", (e) => {
    if (validateAge(e.target.value)) {
        $("#alertAge").fadeOut()


    } else {
        $("#alertAge").fadeIn()

    }
})
inpPassword.addEventListener("input", (e) => {
    if (validatePassword(e.target.value)) {
        $("#alertPassword").fadeOut()


    } else {
        $("#alertPassword").fadeIn()

    }
})

inpRePassword.addEventListener("input", (e) => {
    if ((e.target.value) == inpPassword.value) {
        $("#alertRePassword").fadeOut()



    } else {
        $("#alertRePassword").fadeIn()

    }
})



$(".inp input").on("input", () => {
    if (validateName(inpName.value) && validateEmail(inpEmail.value) && validatePassword(inpPassword.value) && validatePhoneNumber(inpNumber.value) && validateAge(inpAge.value) && inpPassword.value == inpRePassword.value) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", "true")
    }

})

let contactLi = document.getElementById("contactLi")

contactLi.addEventListener("click", () => {
    document.querySelector(".contSearch").classList.add("d-none")
    document.querySelector(".ing").classList.add("d-none")
    document.querySelector(".mainPage").classList.add("d-none")
    document.querySelector(".areaPage").classList.add("d-none")
    document.querySelector("#contForm").classList.replace("d-none", "d-flex")
    document.querySelector(".specData").classList.add("d-none")
})


$(document).ready(function () {
    $(".loader").fadeOut(3000, function () {
        $("#loading").fadeOut(3000, function () {
            $("body").css("overflow", "auto")
        })
    })
})