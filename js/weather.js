const API_KEY="7a507ca8c7fd94ed570f4a9ed3e231ff";

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#middle");
        const temp = document.querySelector("#weather span:last-child");
        const icon = document.querySelector("#icon");

        
        const sliceText = data.name;
        const resultText = String(sliceText).slice(0, sliceText.length -3 );
        city.innerText = resultText;
        weather.innerText = `${data.weather[0].main}`;
        temp.innerText =  `${Math.floor(data.main.temp)}℃`;

        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    });
    
}

function onGeoError()
{
    alert("Can't find you. No wather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);