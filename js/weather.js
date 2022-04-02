


function onGeoOk(position){
    
    
    const API_KEY ="522e3bc908b8b6a9fea07806628eaaac";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=  
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
console.log(url);
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector('#weather');
        const city = document.querySelector('#city');
        const degree = document.querySelector('#degree');
        
       
        
        
weather.innerText = data.name;
city.innerText =   data.weather[0].main;
degree.innerText = `${data.main.temp}℃`
    });
}
function onGeoError(){
    alert("i can't find")
}
navigator.geolocation.getCurrentPosition( onGeoOk,onGeoError )

