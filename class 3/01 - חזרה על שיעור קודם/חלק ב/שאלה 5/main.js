let limit = Number(prompt("גבול לוח הכפל"));

let div = document.querySelector("#multi_table");

//ניצור את הטבלה
let table = `<table>`;

//באמצעות לולאות מקוננות נבנה את השורות והעמודות
for (let r = 1; r <= limit; r++) {
    //נפתח תגית של שורה
    table += `<tr>`;
    //ניצור את כל העמודות בשורה
    for (let c = 1; c <= limit; c++) {
        let n = r * c;
        let isPrimary = true;

        //לולאה שבודקת האם המספר ראשוני או לא
        for (let i = 1; i <= parseInt(n / 2); i++) {
            if (i != 1 && n % i == 0) {
                isPrimary = false;
                break;
            }
        }

        //אם מספר ראשוני - נרצה לוסיף לו את הגדרות העיצוב שנדרשנו
        if (isPrimary)
            table += `<td class="primary">${n}</td>`;
        else
            table += `<td>${n}</td>`;
    }
    //נסגור את השורה
    table += `</tr>`;
}

//בסוף נסגור את התגית של הטבלה
table += `</table>`;

//HTML ואז נוסיף אותה ל 
div.innerHTML = table;