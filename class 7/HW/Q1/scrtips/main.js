import { createCards, flip } from './functions.js'

//סידור הקלפים באופן רנדומלי
createCards();

//קישור אירוע לחיצה לכל תמונה
document.querySelectorAll('#cards img').forEach((element) => {
    element.addEventListener('click', flip);
});