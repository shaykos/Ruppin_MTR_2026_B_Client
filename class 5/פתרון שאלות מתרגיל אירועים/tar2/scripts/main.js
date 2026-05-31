// document.querySelector('') --> תופס את האלמנט הראשון שמתאים לסלקטור
//document.querySelectorAll('') --> תופס את כל האלמנטים שמתאימים לסלקטור

import { changeBodyColor } from "./functions.js";

let btns = document.querySelectorAll('.btn');
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', changeBodyColor);
}