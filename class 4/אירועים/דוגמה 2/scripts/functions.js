
export function checkPassword(event) {
    let element = event.target;

    if (element.value.length < 6) {
        showErrorMessage("אורך הסיסמה חייב להיות לפחות 6 תווים"); // הפעלה של פונקציה נפרדת
    }

    if (hasCapitalLetter(element.value) == false) {
        showErrorMessage("יש לכתוב לפחות אות גדולה אחת");
    }

    if (hasSmallLetter(element.value) == false) {
        showErrorMessage("יש לכתוב לפחות אות קטנה אחת");
    }

    if (hasNumber(element.value) == false) {
        showErrorMessage("יש לכתוב לפחות מספר אחד");
    }
}

export function validatePassword(event) {
    let element = event.target; // השדה של אימות הסיסמה
    let password = document.querySelector('#password'); // השדה של הסיסמה הראשונה

    if (element.value != password.value) {
        showErrorMessage("הסיסאות לא תואמות");
    }

}

export function updateBtnClicked(event) {
    //ביטול רענון הדף
    event.preventDefault();
    
    let error = document.querySelector("#error");
    if (error.innerHTML != "")
        alert("יש לתקן את השגיאות")
    else
        alert("הסיסמה עודכנה בהצלחה")
}


function showErrorMessage(message) {
    document.querySelector("#error").innerHTML += message + '<br>';
}

function hasCapitalLetter(text) {
    //נעבור בלולאה על כל התווים המחרוזת
    for (let i = 0; i < text.length; i++) {
        //true אם נמצא תו אחד שהוא אות גדולה נחזיר 
        if (text[i] >= 'A' && text[i] <= 'Z')
            return true;
    }

    //false עברנו על כל התווים ולא מצאנו אות גדולה ולכן נחזיר 
    return false;
}

function hasSmallLetter(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'a' && text[i] <= 'z')
            return true;
    }

    return false;
}

function hasNumber(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= '0' && text[i] <= '9')
            return true;
    }
    return false;
}