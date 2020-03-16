const COORDS = "coords"

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(locate){
    const latitude = locate.coords.latitude;
    const longitude = locate.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("can't access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = JSON.parse(localStorage.getItem(COORDS));
    if(loadedCoords ===null){
        askForCoords();
    } else {
        // getWeather();
    }
}

function init(){
loadCoords();
}

init();