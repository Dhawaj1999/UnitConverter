
let buttonEl = document.querySelector(".convert-btn")
let inputEl = document.querySelector(".input-el")

buttonEl.addEventListener("click", function(){
    render(inputEl.value)
})

function render(input){
    let num = 0
    num = input


    // meter - feet
    let meter = 3.28 * num
    let feet = 0.30 * num
    feet = feet.toFixed(2)

    document.querySelector(".soopo").innerHTML = `${num} meters`
    document.querySelector(".soopt").innerHTML = `\u00A0= ${meter} feet ||`
    document.querySelector(".soopth").innerHTML = `\u00A0${num} feet =`
    document.querySelector(".soopf").innerHTML = `\u00A0${feet} meters`

    // liter - galoons
    let liter = 0.26 * num
    liter = liter.toFixed(2)
    let gallon = num * 3.78
    gallon = gallon.toFixed(2)

    document.querySelector(".sotpo").innerHTML = `${num} liters`
    document.querySelector(".sotpt").innerHTML = `\u00A0= ${liter} gallons ||`
    document.querySelector(".sotpth").innerHTML = `\u00A0${num} gallons =`
    document.querySelector(".sotpf").innerHTML = `\u00A0${gallon} liters`
    
    // kilograms - pounds
    let kg = 2.20 * num
    kg = kg.toFixed(2)
    let lbs = num * 0.45
    lbs = lbs.toFixed(2)

    document.querySelector(".sothpo").innerHTML = `${num} kilograms`
    document.querySelector(".sothpt").innerHTML = `\u00A0= ${kg} pounds ||`
    document.querySelector(".sothpth").innerHTML = `\u00A0${num} pounds =`
    document.querySelector(".sothpf").innerHTML = `\u00A0${lbs} kilograms`

    
}
