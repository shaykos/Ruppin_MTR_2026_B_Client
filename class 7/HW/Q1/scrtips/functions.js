
export function createCards() {
    let images = document.querySelectorAll('#cards img');
    let imagesCount = new Array(6).fill(0);

    while (imagesCount.some((value) => value != 2)) {

        let index = getRandomNumber(0, 11);
        while (!checkIfAvailable(images, index)) {
            index = getRandomNumber(0, 11);
        }

        let img = getRandomNumber(1, 6);
        while (imagesCount[img - 1] == 2) {
            img = getRandomNumber(1, 6);
        }

        images[index].dataset.card = `./assets/images/${img}.png`;
        imagesCount[img - 1]++;
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkIfAvailable(arr, index) {
    // step 1 -> return arr[index].src.endsWith('back.gif');
    /*
    dataset.card ==> data-card
    קיימת html אנחנו בודקים אם התכונה הזו ב 
    undefined במידה ולא נקבל
    */
    return arr[index].dataset.card == undefined
}

export function flip(event) {
    let element = event.target; // האלמנט שהפעיל את האירוע

    element.src = element.dataset.card;
}

