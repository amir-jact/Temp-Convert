let change = document.querySelector(".changeButton")
let convert = document.querySelector(".convertButton")
let restB = document.querySelector(".resetButton")
let cel = document.querySelector(".C")
let far = document.querySelector(".F")
let con = document.getElementById("converter")
let res  = document.querySelector(".result")


function changeFun(){
    if(cel.innerHTML == "°C"){
        document.title = "Js | °F to °C"
        cel.innerHTML = "°F"
        far.innerHTML = "°C"
        // con.placeholder = "°F"
        con.setAttribute("placeholder", "°F")
    }else{
        document.title = "Js | °C to °F"
        cel.innerHTML = "°C"
        far.innerHTML = "°F"
        con.placeholder = "°C"
    }

}

function convertFun(){
    let c = con.value
    if(!isFinite(c) || c ===""){
        res.innerText = 'oh no give me a number'
    }else{
        if(cel.innerHTML == "°C"){
            res.innerText = (parseFloat(c) * (9 / 5) + 32).toFixed(2) + " F°"
        }else{
            res.innerText = ((parseFloat(c)-32) * (5 / 9)).toFixed(2) + " C°"
        }
    }
}

function resFun(){
    document.title = "Js | °C to °F"
    cel.innerHTML = "°C"
    far.innerHTML = "°F"
    res.innerText = ""
    con.placeholder = "°C"
    con.value = ""
}

change.addEventListener("click", changeFun)
convert.addEventListener("click", convertFun)
restB.addEventListener("click", resFun)