import { loadLocalSpecificData, applyDataCollapse, loadHistorySpecificData, toggleSpecificInfo } from '../interface/js/detail.js';
import { loadLocalBasicData, applyDataHover } from '../interface/js/list.js';
/**
 * 
 * @param {number} lat 
 * @param {number} lon 
 * @param {string} apiKey 
 */
function localCurrentWeather(lat, lon, apiKey) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            /*Stablished an Object thats going to make a filter 
            of the relevant information */
            const FILTER_OBJECT = {
                location: data.name,
                temp: data.main.temp,
                lat: data.coord.lat,
                lon: data.coord.lon,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                weather: data.weather[0].main,
                wSpeed: data.wind.speed
            }
            loadLocalBasicData(FILTER_OBJECT);
            loadLocalSpecificData(FILTER_OBJECT);
            loadHistorySpecificData(FILTER_OBJECT);
            applyDataHover();
            applyDataCollapse();
            toggleSpecificInfo();

        })

}

/**
 * @param {string} city 
 * @param {string} apiKey 
 */
function cityCurrentWeather(city, apiKey) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            /*Stablished an Object thats going to make a filter 
            of the relevant information */
            const FILTER_OBJECT = {
                location: data.name,
                temp: data.main.temp,
                lat: data.coord.lat,
                lon: data.coord.lon,
                feelsLike: data.main.feels_like,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                weather: data.weather[0].main,
                wSpeed: data.wind.speed
            }
            loadLocalBasicData(FILTER_OBJECT);
            loadLocalSpecificData(FILTER_OBJECT);
            loadHistorySpecificData(FILTER_OBJECT);
            applyDataHover();
            applyDataCollapse();
        })

}

export { localCurrentWeather, cityCurrentWeather };