import { localCurrentWeather, cityCurrentWeather } from '../data/info.js';

const API_KEY = 'bb67fd285aad6b59ca1f3255ad2847ac';
const APP = {
    exec: () => {
        getLocalCurrentPosition();
    },
    search: (city) => {
        cityCurrentWeather(city, API_KEY);
    }

}

/*Processes the API query */
function getLocalCurrentPosition() {
    let data = new Array();
    window.addEventListener('load', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat; //Lattitude of location
                var lon; //Longittude of location
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                localCurrentWeather(lat, lon, API_KEY);
            });
        }
    })

}
export { APP };