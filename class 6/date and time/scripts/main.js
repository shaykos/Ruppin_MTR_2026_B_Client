import {startTimer, pauseTimer, stopTimer} from './functions.js';

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#pause').addEventListener('click', pauseTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
