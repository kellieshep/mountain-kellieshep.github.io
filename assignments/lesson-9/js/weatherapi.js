var weatherRequest = new XMLHttpRequest(http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={786c31c2219f70a1504435aa6e57c6bc});
request.open('GET', requestURL);
        request.responseType = 'json';
request.send();


{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":295.96,"pressure":1022,"humidity":53,"temp_min":294.15,"temp_max":298.15},"visibility":10000,"wind":{"speed":5.7,"deg":250},"clouds":{"all":75},"dt":1529416200,"sys":{"type":1,"id":5091,"message":0.0051,"country":"GB","sunrise":1529379769,"sunset":1529439673},"id":2643743,"name":"London","cod":200}