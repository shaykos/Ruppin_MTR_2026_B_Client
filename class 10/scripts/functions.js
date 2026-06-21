import { map } from "./vars.js";

function success(pos) {
    const crd = pos.coords;

    showMap(crd);

    console.log("Your current position is:");
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function showMap(crd) {
    //יוצרים את המפה
    map.setView([crd.latitude, crd.longitude], 15);

    //מציגים את הרחובות
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25
    }).addTo(map);

    //מוסיפים מרקר למפה
    L.marker([crd.latitude, crd.longitude]).addTo(map);

}

function showCurrentMarker(pos){
    const crd = pos.coords;

    let myIcon = L.icon({
        iconUrl: './images/icon.webp',
        iconSize: [38, 38],
    });
    
    L.marker([crd.latitude, crd.longitude], {icon: myIcon}).addTo(map);
}

export function handleLocation() {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    navigator.geolocation.watchPosition(showCurrentMarker, error, options);
}

export async function handlePermission() {
    let permission = await navigator.permissions.query({ name: 'geolocation' });
    console.log(permission);
}
