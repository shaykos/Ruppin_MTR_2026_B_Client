export function guessTheNum(num) {
    let count = 0, div = document.querySelector('#res');
    let guess = Number(prompt("חבר שלו... נחש מספר"));

    while (guess != num) {
        count++;
        if (guess < num) {
            alert("המספר שניחשת נמוך ממה שחבר שלך בחר");
        }
        else {
            alert("המספר שניחשת גבוה ממה שחבר שלך בחר");
        }
        guess = Number(prompt("חבר שלו... נחש מספר"));
    }

    div.innerHTML = `<h1>וואוו!! כל הכבוד!! הצלחת לנחש את המספר ${num} וזה לקח לך "רק" ${count+1} נסיונות</h1>`;
}