export function showMessage(event) {
    let element = event.target;
    document.querySelector(`label[for=${element.id}]`).innerHTML = `יש להזין ${element.placeholder}`;
}

export function hideMessage(event) {
    let element = event.target;
    document.querySelector(`label[for=${element.id}]`).innerHTML = '';

    if (element.id == 'psy'){
        let value = Number(element.value);
        if(value < 555)
            document.querySelector(`label[for=error_psy]`).innerHTML = 'יש לנסות בשנה הבאה';
        else 
            document.querySelector(`label[for=error_psy]`).innerHTML = 'כל הכבוד!!';
    }
}