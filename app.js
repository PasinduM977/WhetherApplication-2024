const txtSearch = document.getElementById("txtSearch");
const temperature = document.querySelector(".temperature");
const whetherCondition = document.querySelector(".whetherCondition");
const date = document.querySelector(".date");
const cityNCountry = document.querySelector(".cityNCountry");
const todayDynamicWhetherIcon = document.querySelector(".todayDynamicWhetherIcon");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const preasure = document.getElementById("preasure");
const forcast1 = document.getElementById("forcast1")
const forcast2 = document.getElementById("forcast2")
const forcast3 = document.getElementById("forcast3")
const previous1 = document.getElementById("previous1")
const previous2 = document.getElementById("previous2")
const previous3 = document.getElementById("previous3")
let f1="";
let t1="";
let t2="";
let t3="";
let t4="";
let t5="";
let t6="";







function findlocation() {

    fetch("http://api.weatherapi.com/v1/current.json?key=1c7256fa59684ffba3d183112240209 &q=" + txtSearch.value)
        .then(res => res.json())
        .then(data => {

            let temp = `<h1>${data.current.temp_c}&deg;C</h1>`
            temperature.innerHTML = temp;
            f1=`<h1>${data.current.temp_f}&deg;F</h1>`


            let condi = `<h3>${data.current.condition.text}...</h3>`
            whetherCondition.innerHTML = condi;

            let dt = `<h4>${data.location.localtime}</h4>`
            date.innerHTML = dt;
            

            let cnc = `<h4>${data.location.country},${data.location.name}</h4>`
            cityNCountry.innerHTML = cnc;

            let dynicon = `<img src=${data.current.condition.icon} alt="">`
            todayDynamicWhetherIcon.innerHTML = dynicon;

            humidity.innerHTML = `${data.current.humidity}` + "%";

            wind.innerHTML = `${data.current.wind_mph}` + " mph";

            preasure.innerHTML = `${data.current.pressure_mb}` + " mb";


        }

        )

    //forcast

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=1c7256fa59684ffba3d183112240209 &q=${txtSearch.value}&days=4&aqi=no&alerts=yes`)
        .then(res => res.json())
        .then(data => {
            

            let for1 = `
                                <h5 class="card-title">${data.forecast.forecastday[1].date}</h5>
                                <img src="${data.forecast.forecastday[1].day.condition.icon}" class="card-img-top" alt="...">
                                <p class="card-text">${data.forecast.forecastday[1].day.condition.text}</p>
                                <p class="card-text">${data.forecast.forecastday[1].day.avgtemp_c}&deg;C</p>`

                                forcast1.innerHTML = for1;
                                t1=`<h5 class="card-title">${data.forecast.forecastday[1].date}</h5>
                                <img src="${data.forecast.forecastday[1].day.condition.icon}" class="card-img-top" alt="...">
                                <p class="card-text">${data.forecast.forecastday[1].day.condition.text}</p>
                                <p id="t1" class="card-text">${data.forecast.forecastday[1].day.avgtemp_f}&deg;F</p>`

            let for2 = `
            <h5 class="card-title">${data.forecast.forecastday[2].date}</h5>
            <img src="${data.forecast.forecastday[2].day.condition.icon}" class="card-img-top" alt="...">
            <p class="card-text">${data.forecast.forecastday[2].day.condition.text}</p>
            <p class="card-text">${data.forecast.forecastday[2].day.avgtemp_c}&deg;C</p>`

            forcast2.innerHTML = for2;
            t2=`<h5 class="card-title">${data.forecast.forecastday[2].date}</h5>
            <img src="${data.forecast.forecastday[2].day.condition.icon}" class="card-img-top" alt="...">
            <p class="card-text">${data.forecast.forecastday[2].day.condition.text}</p>
            <p class="card-text">${data.forecast.forecastday[2].day.avgtemp_f}&deg;F</p>`

            let for3 = `
<h5 class="card-title">${data.forecast.forecastday[3].date}</h5>
<img src="${data.forecast.forecastday[3].day.condition.icon}" class="card-img-top" alt="...">
<p class="card-text">${data.forecast.forecastday[3].day.condition.text}</p>
<p class="card-text">${data.forecast.forecastday[3].day.avgtemp_c}&deg;C</p>`

            forcast3.innerHTML = for3;
            t3=`
<h5 class="card-title">${data.forecast.forecastday[3].date}</h5>
<img src="${data.forecast.forecastday[3].day.condition.icon}" class="card-img-top" alt="...">
<p class="card-text">${data.forecast.forecastday[3].day.condition.text}</p>
<p class="card-text">${data.forecast.forecastday[3].day.avgtemp_f}&deg;F</p>`

        }

        )

//prevoious
let d=new Date();
let res=d.setDate(d.getDate()-1);

fetch(`http://api.weatherapi.com/v1/history.json?key=1c7256fa59684ffba3d183112240209&q=${txtSearch.value}&dt=${new Date(res).getFullYear()}-${new Date(res).getMonth()+1}-${new Date(res).getDate()}`)
.then(res=>res.json())
.then(data=>{

    
    let pre1 = `
    <h5 class="card-title">${data.forecast.forecastday[0].date}</h5>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" class="card-img-top" alt="...">
    <p class="card-text">${data.forecast.forecastday[0].day.condition.text}</p>
    <p class="card-text">${data.forecast.forecastday[0].day.avgtemp_c}&deg;C</p>`

previous1.innerHTML = pre1;
t4=`
    <h5 class="card-title">${data.forecast.forecastday[0].date}</h5>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" class="card-img-top" alt="...">
    <p class="card-text">${data.forecast.forecastday[0].day.condition.text}</p>
    <p class="card-text">${data.forecast.forecastday[0].day.avgtemp_f}&deg;F</p>`




})

let d2=new Date();
let res2=d2.setDate(d2.getDate()-2);

fetch(`http://api.weatherapi.com/v1/history.json?key=1c7256fa59684ffba3d183112240209&q=${txtSearch.value}&dt=${new Date(res2).getFullYear()}-${new Date(res2).getMonth()+1}-${new Date(res2).getDate()}`)
.then(res=>res.json())
.then(data=>{

    
    let pre2 = `
    <h5 class="card-title">${data.forecast.forecastday[0].date}</h5>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" class="card-img-top" alt="...">
    <p class="card-text">${data.forecast.forecastday[0].day.condition.text}</p>
    <p class="card-text">${data.forecast.forecastday[0].day.avgtemp_c}&deg;C</p>`

previous2.innerHTML = pre2;
t5=`
    <h5 class="card-title">${data.forecast.forecastday[0].date}</h5>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" class="card-img-top" alt="...">
    <p class="card-text">${data.forecast.forecastday[0].day.condition.text}</p>
    <p class="card-text">${data.forecast.forecastday[0].day.avgtemp_f}&deg;F</p>`






})

let d3=new Date();
let res3=d3.setDate(d3.getDate()-3);

fetch(`http://api.weatherapi.com/v1/history.json?key=1c7256fa59684ffba3d183112240209&q=${txtSearch.value}&dt=${new Date(res3).getFullYear()}-${new Date(res3).getMonth()+1}-${new Date(res3).getDate()}`)
.then(res=>res.json())
.then(data=>{

    
    let pre3 = `
    <h5 class="card-title">${data.forecast.forecastday[0].date}</h5>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" class="card-img-top" alt="...">
    <p class="card-text">${data.forecast.forecastday[0].day.condition.text}</p>
    <p class="card-text">${data.forecast.forecastday[0].day.avgtemp_c}&deg;C</p>`

previous3.innerHTML = pre3;

t6=`
    <h5 class="card-title">${data.forecast.forecastday[0].date}</h5>
    <img src="${data.forecast.forecastday[0].day.condition.icon}" class="card-img-top" alt="...">
    <p class="card-text">${data.forecast.forecastday[0].day.condition.text}</p>
    <p class="card-text">${data.forecast.forecastday[0].day.avgtemp_f}&deg;F</p>`



})


}

function faranhide()
{
    temperature.innerHTML = f1;
    forcast1.innerHTML = t1;
    forcast2.innerHTML = t2;
    forcast3.innerHTML = t3;
    previous1.innerHTML = t4;
    previous2.innerHTML = t5;
    previous3.innerHTML = t6;

}

function celcious()
{
    findlocation(); 
    console.log(navigator.geolocation.getCurrentPosition());
    
}
