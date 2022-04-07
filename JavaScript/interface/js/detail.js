/**
 * Module which implements scripts on the detail layer
 * 
 * @author Ivan C Romero
 * @since 06/04/2022
 */
function applyDataCollapse() {
    var infoElements = document.getElementsByClassName("weather-info");
    //Includes for to add events to each elements of the same class
    for (let index = 0; index < infoElements.length; index++) {
        infoElements[index].addEventListener("click", function() {
            // highlight the modal clicked
            this.classList.toggle("active");
            // highlight the modal clicked
            let content = this.nextElementSibling;
            //If display is defined = none | visible
            content.style.display === "contents" ? content.style.display = "none" : content.style.display = "contents"
        });
    }
}

function loadLocalSpecificData(weatherApiResponse) {
    const LAYOUT = document.getElementById('specificInfo');
    var fragment = document.createDocumentFragment();

    /*Instant an Array of all the information  */
    const INFO = [
        'Weather: ' + weatherApiResponse.weather,
        'Description: ' + weatherApiResponse.description,
        'Feels like: ' + weatherApiResponse.feelsLike + 'ºC',
        'Wind Speed: ' + weatherApiResponse.wSpeed + ' m/s',
        'Humidity: ' + weatherApiResponse.humidity + '%',
    ];

    /*For to include all html box */
    for (const I of INFO) {
        const DATA = document.querySelector('[data-specific-weather-template]').content.cloneNode(true).children[0];
        const P = document.createElement('p');
        P.textContent = I;
        DATA.appendChild(P);
        fragment.appendChild(DATA);
    }
    LAYOUT.append(fragment);
}

function loadHistorySpecificData(weatherApiResponse) {
    const LAYOUT = document.getElementById('detailsContainer');
    var fragment = document.createDocumentFragment();

    /*Instant an Array of all the information  */
    const INFO = [
        weatherApiResponse.location,
        weatherApiResponse.temp,
        weatherApiResponse.lat,
        weatherApiResponse.lon
    ];
    /*For to include all html box */
    for (let index = 0; index < 2; index++) {
        const DATA = document.querySelector('[data-specific-weather-template]').content.cloneNode(true).children[0];
        const BTN = document.createElement('button');
        BTN.setAttribute('class', 'weather-info');
        const CONTENT = document.createElement('div');
        CONTENT.setAttribute('class', 'content');
        const INFO_CONTAINER = document.createElement('div');
        INFO_CONTAINER.setAttribute('class', 'location-info');
        const P_A = document.createElement('p');
        const P_B = document.createElement('p');
        P_A.textContent = INFO[0];
        P_B.textContent = INFO[1] + ' ºC';
        if (index != 0) {
            P_A.textContent = 'Lattitude ' + INFO[2];
            P_B.textContent = 'Longittude ' + INFO[3];
            DATA.append(P_A);
            DATA.append(P_B);
            INFO_CONTAINER.append(DATA);
            CONTENT.append(INFO_CONTAINER);

            fragment.append(CONTENT);
        } else {
            BTN.append(P_A);
            BTN.append(P_B);



            fragment.append(BTN);
        }
    }
    LAYOUT.append(fragment);
}



function toggleSpecificInfo() {
    let specificInfo = document.getElementById('specificInfo');
    specificInfo.style.display = 'none';
    let location = document.getElementsByClassName('search-location__info')[0];
    location.setAttribute('style', 'cursor:pointer');
    location.addEventListener('mouseover', () => {
        location.style.background = '#F68B0C';
    });
    location.addEventListener('mouseleave', (ev) => {
        location.style.background = '#12121A';
    });
    location.addEventListener('click', () => {
        if (specificInfo.style.display == 'none') { specificInfo.style.display = 'flex'; } else {
            specificInfo.style.display = 'none';
        }
    });
}

export { applyDataCollapse, loadLocalSpecificData, loadHistorySpecificData, toggleSpecificInfo };