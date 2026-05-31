
//כברירת מחדל event כל פונקציה שמקושרת לאירוע מקבלת תמיד את הפרמטר 
export function btnClick(event) {
    //console.log(event);
    //כדי לגשת לאלמנט שהפעיל את האירוע 
    let element = event.target;

    if(element.innerText == 'הסתר תמונה'){
        document.querySelector('#img').style.display = "none";
        element.innerText = "הצג תמונה"
    }
    else{
        document.querySelector('#img').style.display = "block";
        element.innerText = "הסתר תמונה"
    }
}