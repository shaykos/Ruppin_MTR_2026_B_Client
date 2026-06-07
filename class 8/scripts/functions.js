import User from './models/user.mdl.js';

export function createUser(event) {
    event.preventDefault(); // מונע את פעולת ברירת המחדל של הטופס

    let full_name = document.querySelector('#full_name').value;
    let email = document.querySelector('#email').value;
    let dob = document.querySelector('#dob').value;
    let country = document.querySelector('#country').value;
    let phone = document.querySelector('#phone').value;
    let password = document.querySelector('#password').value;
    let confirm_password = document.querySelector('#confirm_password').value;

    if(password != confirm_password){
        alert('הסיסמאות לא תואמות');
        return;
    }

    let today = new Date();
    let age = ((today - new Date(dob)) / 1000 / 60 / 60 / 24 / 365).toFixed(0);
    if(age < 18 || age > 90){
        alert('וואו. אין מצב בן אדם! אתה ממש לא בגיל המתאים לזה');
        return;
    }

    let user = new User(full_name, email, dob, country, phone, password, confirm_password);
    console.log(user);

    //ניקוי הטופס
    event.target.reset();
}