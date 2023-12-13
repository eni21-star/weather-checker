
const apikey = "d92835b61828286741023aafd6ec92f7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.getElementById("imggs");
let feelsTxt = document.getElementById("feelslike");

let inputTxt = document.getElementById("searchbox").value;

let sbmBtn = document.getElementById("sbBTN");

sbmBtn.addEventListener("click", function () {
  inpTxt();



  function inpTxt() {


    let inputTxt = document.getElementById("searchbox").value;

    checkWeather(inputTxt);
  }





  async function checkWeather(cityy) {
    const response = await fetch(apiUrl + cityy + `&appid=${apikey} `);
    const data = await response.json();


    document.getElementById("city").innerHTML = data.name;
    document.getElementById("degg").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humivalue").innerHTML = data.main.humidity + "%";
    document.getElementById("windval").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == `Mist`) {
      weatherIcon.src = "mist.png";
      feelsTxt.textContent = "Misty";

    }
    else if (data.weather[0].main == `Clear`) {

      weatherIcon.src = "clear.png";
      feelsTxt.textContent = "Clear";
    }
    else if (data.weather[0].main == `Clouds`) {

      weatherIcon.src = "clouds.png";
      feelsTxt.textContent = "Cloudy";
    }
    else if (data.weather[0].main == `Drizzle`) {

      weatherIcon.src = "drizzle.png";
      feelsTxt.textContent = "Drizzling";
    }
    else if (data.weather[0].main == `Rain`) {

      weatherIcon.src = "rain.png";
      feelsTxt.textContent = "Raining";
    }
    else if (data.weather[0].main == `Snow`) {

      weatherIcon.src = "snow.png";
      feelsTxt.textContent = "Snowing";
    }
    else {
      weatherIcon.src = "";
      feelsTxt.textContent = "";
    }

    document.querySelector(".halfpart").style.display = "block";

    console.log(data);


  }
})




