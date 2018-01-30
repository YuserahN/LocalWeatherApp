$(document).ready(function() { 
  var temperature, temperatureFahrenheit, temperatureCelsius, highTemp, lowTemp, date, time, city, icon; 
    var skycons = new Skycons({ 
    color: "#ffffff", 
    resizeClear: true 
  }); 
  
  function getLocation() {
    if(navigator.geolocation) {
      
      return navigator.geolocation; 
    } else {
      alert("Failed to get coordinates")
    }
  }
  
  function getWeather(position) {
    var latitude = position.coords.latitude; 
    var longitude = position.coords.longitude; 
    var apiKey = "69a518c5696c54734b2a7eca1559ae49"; 
    
     $.getJSON("https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(forecast) { 
    temperature = Math.floor(forecast.currently.temperature); 
    highTemp = Math.floor(forecast.daily.data[0].temperatureMax); 
    lowTemp = Math.floor(forecast.daily.data[0].temperatureMin); 
    date = Math.floor(forecast.daily.data[0].time); 
    time = forecast.currently.time; 
    city = forecast.timezone; 
    city = city.replace("/", ", "); 
    icon = forecast.currently.icon; 
    
    var degreeSym = "℉"; 
       
    $("#temperature").text(temperature + " " + degreeSym); 
    
     $("#celsius").click(function() { 
      if(degreeSym == "℃") {
         //$("#temperature").text(temperature + " " + degreeSym); 
        return temperature; 
      } 
      else {
        //temperature = Math.floor((temperature - 32)/1.8); 
        degreeSym = "℃";
         $("#temperature").text(Math.floor((temperature - 32)/1.8) + " " + degreeSym); 
      }
    }); 
       
    //var fahrenheit = true; 
    $("#fahrenheit").click(function() { 
      if(degreeSym == "℉" ) { 
         $("#temperature").text(temperature + " " + degreeSym); 
      } 
      else { 
        degreeSym = "℉" 
        //temperature = Math.floor(temperature * 1.8 + 32); 
        temperature = Math.floor(forecast.currently.temperature); 
        $("#temperature").text(temperature + " " + degreeSym); 
      } 
    });  
       
    //$("#temperature").text(temperature + " " + degreeSym); 
   // $("#highTemp").text(highTemp); 
    //$("#lowTemp").text(lowTemp); 
   // $("#date").text(date); 
   // $("#time").text(time); 
    $("#city").text(city); 
    //$("#icon").text(icon); 
    
    if(icon == "clear-day") {
      skycons.add("icon", Skycons.CLEAR_DAY); 
      $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077043/clearDay_ecpbap.jpg)'); 
    } 
    else if(icon == "clear-night") {
      skycons.add("icon", Skycons.CLEAR_NIGHT); 
       $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077026/clearNight_lkiyql.jpg)'); 
    }
    else if(icon == "partly-cloudy-day") {
      skycons.add("icon", Skycons.PARTLY_CLOUDY_DAY); 
      $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077025/partlyCloudyDay_qxs4fz.jpg)'); 
    } 
    else if(icon == "partly-cloudy-night") {
      skycons.add("icon", Skycons.PARTLY_CLOUDY_NIGHT); 
       $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077037/partlyCloudyNight_g7grdn.jpg)'); 
    } 
    else if(icon == "cloudy") {
      skycons.add("icon", Skycons.CLOUDY); 
      $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500081564/cloudy_egtngs.jpg)'); 
    } 
    else if(icon == "rain") {
      skycons.add("icon", Skycons.RAIN); 
       $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077033/rain_kmnnqo.jpg)'); 
    } 
    else if(icon == "sleet") {
      skycons.add("icon", Skycons.SLEET); 
       $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077037/sleet_cnofzb.jpg)'); 
    } 
    else if(icon == "snow") {
      skycons.add("icon", Skycons.SNOW); 
       $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077040/snow_ayxdyq.jpg)');  
    } 
    else if(icon == "wind") {
      skycons.add("icon", Skycons.WIND); 
       $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077038/wind_qy4n9b.jpg)'); 
    } 
    else if(icon == "fog") {
      skycons.add("icon", Skycons.FOG); 
      $('body').css('background-image', 'url(http://res.cloudinary.com/ynd/image/upload/v1500077044/fog_iaj5pb.jpg)'); 
    } 
       
   
    skycons.play(); 
      
    console.log(forecast); 
     
  }); 
  } 
  
  var geoNavigator = getLocation(); 
  geoNavigator.getCurrentPosition(getWeather);
  
});  

