// API - документация запросов
// 16-ая система (используются буквы a-f)
const apiKey = "8ce1862ed948a6f7547898cc9bc81ec0";
// По нажатии Get Weather:
// 1. Считывание инфо из инпута
// 2. Отправляем запрос
// 3. Вывод инфо

const locationInput = document.getElementById("locationInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherContainer = document.getElementById("weatherContainer");

const currentWeatherData = () => {
  const location = locationInput.value.trim();

  // документация по запросам приходит от backend
  // TODO: деструктуризация weather + отображение большего кол-ва инфо о погоде
  // https://openweathermap.org/img/wn/10d@2x.png

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then(
      ({
        name,
        sys: { country },
        main: { temp },
        weather: [{ description, icon }],
        clouds: { all: cloudiness },
        main: { humidity },
        wind: { speed },
        visibility,
      }) => {
        weatherContainer.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${icon}"/>
            <h2>${name} (${country})</h2>
            <p>Temperature: ${temp} ℃</p>
            <p>Weather: ${description}</p>
            <p>Cloudiness: ${cloudiness}%</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind speed: ${speed} m/s</p>
            <p>Visibility: ${visibility} meter</p>
        `;
      }
    )
    .catch((err) => {
      console.log(err);
      weatherContainer.innerHTML = "<p>City is not found. Please try again</p>";
    });

  locationInput.value = "";
};

getWeatherBtn.onclick = () => currentWeatherData();

locationInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    currentWeatherData();
  }
});

// ----------------------------------- M Y   C L A S S W O R K-----------------------------------------------

/*
getWeatherBtn.onclick = async () => {
  const location = locationInput.value.trim();

  if (location) {
    try {
      const weather = await fetchWeather(location);
      displayWeather(weather);
    } catch (error) {
      console.log(error);
      weatherContainer.innerHTML = "<p>City is not found. Please try again</p>";
    }
  } else {
    alert("Please enter location!");
  }

  locationInput.value = "";
};

async function fetchWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  );
  const weather = await response.json();
  return weather;
}

function displayWeather(weather) {
  const {name, sys: {country}, main: {temp}, weather: [{description}], clouds: {all: cloudiness}, main: {humidity}, wind: {speed}, visibility} = weather;

  weatherContainer.innerHTML = `
            <h2>${name} (${country})</h2>
            <p>Temperature: ${temp} ℃</p>
            <p>Weather: ${description}</p>
            <p>Cloudiness: ${cloudiness}%</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind speed: ${speed} m/s</p>
            <p>Visibility: ${visibility} meter</p>
            `;
}
 */

const arr = [1, 2, 3]; // Кортеж (массив с заранее известной длиной и элементами))
const [_, , third] = arr;

// git config --global user.name "Babenko-Zhanna" - настройка имени
// к кому обращаемся (гит), что делаем (настраиваем), как настраиваем, какое свойство настраиваем и значение
// git config --global user.email "babenko.zh@gmail.com" настройка email

// Генерация пары RSA/SSH
// Выполняется один в “начале карьере”
// Перед выполнением убедись, что ключа еще нет (!)
// Проверить, что ключей нет
// cat ~/.ssh/id_rsa.pub
// cat ~/.ssh/id_ed25519.pub
// Генерация пары ключей
// ssh-keygen -t ed25519 -C 'email@example.org'

// git init - инициализировали пустой репозиторий (.git) в папке (локальный)
// git add index.html - добавить файл в репозиторий
// git add . - добавить все файлы

// git commit -m "weather app" (сделать коммит)
// => 
// [main (root-commit) e2dbf20] weather app - с какой веткой идет работа (main)
//  3 files changed, 195 insertions(+)
//  create mode 100644 index.html - что добавлено
//  create mode 100644 script.js
//  create mode 100644 style.css  

// git remote add origin https://github.com/Babenko-Zhanna/20_Weather_App_18_12_2024.git
// git branch -M main
// git push -u origin main