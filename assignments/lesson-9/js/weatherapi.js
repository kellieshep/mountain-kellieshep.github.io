var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET',http://api.openweathermap.org/data/2.5/weather?q=Franklin,ID &appid=786c31c2219f70a1504435aa6e57c6bc, true );
        
weatherRequest.send();
weatherRequest.onload= function () {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    
    console.log(weatherInfo);
}

