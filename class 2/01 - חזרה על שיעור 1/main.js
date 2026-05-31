
//Q1
// let name = prompt("איך קוראים לך?");
// alert(`ברוכים הבאים ${name}`);
// console.log(`ברוכים הבאים ${name}`);

//Q2
// let firstName = prompt("שם פרטי");
// let lastName = prompt("שם משפחה");
// let age = Number(prompt("מה גילך?"));

// alert(`שלום ${firstName} ${lastName}
// נכון להיום הינך בגיל ${age}
// יום טוב!`);


//Q3 - TODO
let firstName = prompt("שם פרטי");
let lastName = prompt("שם משפחה");
let age = Number(prompt("מה גילך?"));
let address = prompt("מקום מגורים");

let div = document.querySelector('#q3');

div.innerHTML = `
    <table>
        <tr>
            <td>שם פרטי</td>
            <td>${firstName}</td>
        </tr>
        <tr>
            <td>שם משפחה</td>
            <td>${lastName}</td>
        </tr>
        <tr>
            <td>גיל</td>
            <td>${age}</td>
        </tr>
        <tr>
            <td>מקום מגורים</td>
            <td>${address}</td>
        </tr>
    </table>
`;



//Q4
// let n1 = Number(prompt('מספר 1'));
// let n2 = Number(prompt('מספר 2'));
// let n3 = Number(prompt('מספר 3'));
// let avg = (n1 + n2 + n3) / 3;
// console.log(`the average is ${avg}`);

//Q6
// const factor = 13;
// let gradeHTML = 78, gradeCSharp = 86;
// let avgBeforeFactor = (gradeCSharp + gradeHTML) / 2;
// let avgAfterFactor = (gradeCSharp + factor + gradeHTML + factor) / 2;

// alert(`ממוצע לפני הפקטור: ${avgBeforeFactor}
// ממוצע אחרי הפקטור: ${avgAfterFactor}`);

//Q7
// let n1 = Number(prompt("מספר 1"));
// let n2 = Number(prompt("מספר 2"));
// let sum = n1 + n2;
// let avg = (n1+ n2) / 2;

// alert(`הסכום ${sum}
// הממוצע ${avg}
// ${n1 - 1} ${n1} ${n1 + 1}
// ${n2 -1} ${n2} ${n2 + 1}`);



