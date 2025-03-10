
const serch = document.querySelector("#Serch")
const title = document.getElementById("title")
const temp = document.getElementById("temp")
const img = document.getElementById("img")
const statu = document.getElementById("status")
const pers = document.getElementById("per")
const wind = document.getElementById("wind")
const direction = document.getElementById("dir")
const current_day = document.getElementById("curent_day")
const month_day = document.getElementById("m_day")
const month_name = document.getElementById("m_name")
//seconde 
const seconde_day = document.getElementById("d2")
const img2 = document.getElementById("img2")
const seconde_max = document.getElementById("second_max")
const seconde_min = document.getElementById("second_min")
const seconde_status = document.getElementById("seconde_status")
//third
const third_day = document.getElementById("d3")
const img3 = document.getElementById("img3")
const third_max = document.getElementById("third_max")
const third_min = document.getElementById("third_min")
const third_status = document.getElementById("third_status")






async function AP(t = `Cairo`) {
    const req = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=96ca9c8405be4d55aaf151416241712&q=${t}&days=3`);
    let data = await req.json();
    // current tempreture
    temp.innerText = data.current.temp_c;
    // Get the date
    let date = new Date(data.forecast.forecastday[0].date);
    
    // Day name
    let dayName = date.toLocaleString('en-US', { weekday: 'long' });
    current_day.innerText = dayName;

    // Month name
    let mn = date.toLocaleString('en-US', { month: 'long' });
    month_name.innerText = mn;

    // Day of the month
    month_day.innerText = date.getDate();
    // city name
    title.innerText = data.location.name
    // icon 
    img.setAttribute('src',data.current.condition.icon)
    //status
    statu.innerText = data.current.condition.text
    // bottom icons
    pers.innerText = data.forecast.forecastday[0].day.daily_chance_of_rain;
    wind.innerText = Math.round(data.current.wind_kph);
    switch (data.current.wind_dir) {
        case 'N':
            direction.innerText = "North";
            break;
        case 'S':
            direction.innerText = "South";
            break;
        case 'E':
            direction.innerText = "East";
            break;
        case 'W':
            direction.innerText = "West";
            break;
        case 'NE':
            direction.innerText = "Northeast";
            break;
        case 'NW':
            direction.innerText = "Northwest";
            break;
        case 'SE':
            direction.innerText = "Southeast";
            break;
        case 'SW':
            direction.innerText = "Southwest";
            break;
        default:
            direction.innerText = "...";
            break;
    }
    //seconde day
    let secondDayDate = new Date(data.forecast.forecastday[1].date);
    let day2Name = secondDayDate.toLocaleString('en-US', { weekday: 'long' });
    seconde_day.innerText=day2Name
    img2.setAttribute('src',data.forecast.forecastday[1].day.condition.icon)
    seconde_max.innerText = data.forecast.forecastday[1].day.maxtemp_c;
    seconde_min.innerText = data.forecast.forecastday[1].day.mintemp_c;
    seconde_status.innerText = data.forecast.forecastday[1].day.condition.text
    //third day
    let thirdDayDate = new Date(data.forecast.forecastday[2].date);
    let day3Name = thirdDayDate.toLocaleString('en-US', { weekday: 'long' });
    third_day.innerText=day3Name
    img3.setAttribute('src',data.forecast.forecastday[2].day.condition.icon)
    third_max.innerText = data.forecast.forecastday[2].day.maxtemp_c;
    third_min.innerText = data.forecast.forecastday[2].day.mintemp_c;
    third_status.innerText = data.forecast.forecastday[2].day.condition.text
}
AP()


serch.addEventListener("input", (el) => {
    let count = el.target.value.length; 
    if (count === 4) 
    { 
        AP(el.target.value);
    }
});