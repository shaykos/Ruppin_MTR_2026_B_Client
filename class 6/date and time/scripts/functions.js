let timer;

export function startTimer() {
    let hoursElement = document.querySelector('#hours');
    let minutesElement = document.querySelector('#minutes');
    let secondsElement = document.querySelector('#seconds');

    let hours = Number(hoursElement.textContent);
    let minutes = Number(minutesElement.textContent);
    let seconds = Number(secondsElement.textContent);

    timer = setInterval(() => {
        seconds++;
        minutes += Math.floor(seconds / 60);
        seconds = seconds % 60;
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;

        hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
        minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 50);

}

export function pauseTimer() {
    clearInterval(timer);
}

export function stopTimer() {
    clearInterval(timer);

    let hoursElement = document.querySelector('#hours');
    let minutesElement = document.querySelector('#minutes');
    let secondsElement = document.querySelector('#seconds');

    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
}

