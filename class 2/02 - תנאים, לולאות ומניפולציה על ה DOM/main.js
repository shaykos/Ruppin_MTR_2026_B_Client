
// let age = Number(prompt('מה גילך?'));
// let div = document.querySelector('#image_holder');

// if(age < 16.5){
//     //שמראה שאי אפשר לגשת לתיאוריה HTML נרצה להציג תמונה ב 
//     div.innerHTML = `<img src="./assets/no.webp" />`;
// }
// else
// {
//     //שמראה שאפשר לגשת לתיאוריה HTML נרצה להציג תמונה ב 
//     div.innerHTML = `<img src="./assets/yes.jpg" />`;
// }


let div2 = document.querySelector('#for_example');
for (let i = 1; i <= 25; i++) {
    div2.innerHTML += `${i} `;
    
    //מתחלק ב-5 ללא שארית נרצה לרדת שורה i אם 
    if (i % 5 == 0) {
        div2.innerHTML += '<br>';
    }
}