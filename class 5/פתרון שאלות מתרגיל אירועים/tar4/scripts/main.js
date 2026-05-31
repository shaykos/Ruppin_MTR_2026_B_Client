// document.querySelector('') --> תופס את האלמנט הראשון שמתאים לסלקטור
//document.querySelectorAll('') --> תופס את כל האלמנטים שמתאימים לסלקטור

import { showMessage, hideMessage } from './functions.js'

let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', showMessage);
    inputs[i].addEventListener('blur', hideMessage);
}