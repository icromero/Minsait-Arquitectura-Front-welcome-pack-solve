function loadLocalBasicData(weatherApiResponse) {
    const LAYOUT = document.getElementById('basicInfo');
    var fragment = document.createDocumentFragment();
    /*Instant an Array of all the information  */
    const INFO = [
        weatherApiResponse.location,
        weatherApiResponse.temp,
        weatherApiResponse.lat,
        weatherApiResponse.lon
    ];

    for (let index = 0; index < 2; index++) {
        const DATA = document.querySelector('[data-basicinfo-weather-template]').content.cloneNode(true).children[0];
        const P_A = document.createElement('p');
        const P_B = document.createElement('p');
        P_A.textContent = INFO[0];
        P_B.textContent = INFO[1] + ' ºC';
        if (index != 0) {
            P_A.textContent = 'Lattitude ' + INFO[2];
            P_B.textContent = 'Longittude ' + INFO[3];
        }
        DATA.appendChild(P_A);
        DATA.appendChild(P_B);
        fragment.appendChild(DATA);
    }
    LAYOUT.append(fragment);
}
//Includes for to add events to each elements of the same class
function applyDataHover() {
    let locInfo = document.getElementsByClassName('location-info__data');
    for (let index = 0; index < locInfo.length; index++) {
        locInfo[index].addEventListener('mouseover', (event) => {
            // highlight the mouseenter target
            event.target.style.background = '#F68B0C';

        }, true);
        locInfo[index].addEventListener('mouseleave', (eve) => {
            // reset the color after a short delay
            setTimeout(function() {
                eve.target.style.background = 'black';
            });
        }, true)

    }
}
export { loadLocalBasicData, applyDataHover };