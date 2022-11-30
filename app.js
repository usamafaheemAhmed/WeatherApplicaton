// Tutorial by http://youtube.com/CodeExplained
// api key : 82005d27a116c2880c8f0fcb866998a0

let x;
window.addEventListener('load', function () {
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
      
  });

  function showPosition(position) {
    x = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    console.log(x);
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    let api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=82005d27a116c2880c8f0fcb866998a0`;
    fetch(api).then( response =>  response.json()).then((data)=>{
   
      showData(data);
    })
  
  }


  const showData=(weather)=>{
    console.log(weather);
    let obj=weather;
    console.log(obj.name);
    console.log(obj.main.temp);
    console.log(obj.main.humidity);
    console.log(obj.main.feels_like);
    console.log(obj.weather[0].main);
    console.log(obj.weather[0].icon);
    let locationname=obj.name;
    let temp=obj.main.temp-273.15;
    let humidity=obj.main.humidity;
    let feels_like=obj.main.feels_like -273.15;
    let main=obj.weather[0].main;
    let icon=obj.weather[0].icon;

    document.getElementById('weatherimage').src=`./icons/${icon}.png`;
    document.getElementById('locationname').innerHTML=locationname;
    document.getElementById('temp').innerHTML=(temp).toFixed(0)+"°C";
    document.getElementById('humidity').innerHTML=humidity;
    document.getElementById('feels_like').innerHTML=feels_like.toFixed(0) +"°C";
    document.getElementById('main').innerHTML=main;


    
    }