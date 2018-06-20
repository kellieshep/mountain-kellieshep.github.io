var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?q=franklin,us&appid=786c31c2219f70a1504435aa6e57c6bc&units=imperial', true );
        
weatherRequest.send();
weatherRequest.onload = function (){
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("currentWind").innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path="//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById("weather_icon").src=icon_path;
    
}//end of function

