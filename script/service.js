  
    var section = document.querySelector('section');
    var requestURL = 'https://kellieshep.github.io/mountain-kellieshep.github.io/script/servicejson.js';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
request.send();
        request.onload = function(){
  var services = request.response;
  
  showservices(services);
}
   

 

function showservices(jsonObj){
  var services = jsonObj['services'];
      
  for (var i = 0; i < services.length; i++){
     
       if (i==2) {
                continue;}
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
   
    var myList = document.createElement('ul');

    myH2.textContent = services[i].name;
    myPara1.textContent = 'Price: ' + services[i].price;
    myPara2.textContent = 'When: ' + services[i].whenTo;
    myPara3.textContent = 'Services Performed: ';
   
        
    var events = services[i].events;
    for (var j = 0; j < events.length; j++){
      var listItem = document.createElement('li');
      listItem.textContent = events[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}