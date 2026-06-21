import { handleLocation, handlePermission } from "./functions.js";


document.querySelector('#permission').addEventListener('click', handlePermission);
document.querySelector('#start').addEventListener('click', handleLocation);

window.addEventListener('DOMContentLoaded', handleLocation);
