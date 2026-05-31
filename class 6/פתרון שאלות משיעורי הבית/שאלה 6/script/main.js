import { convertLetters } from './functions.js';

let arr1 = [1, 3, 'a', '%', 'U'];
let arr2 = ['!', 'A', 'b', 'i', 'X'];
let arr3 = ['a', 'b', 'c', 'F', 'Y', 'o'];

let a1 = convertLetters(arr1);
let a2 = convertLetters(arr2);
let a3 = convertLetters(arr3);

if (a1 != null) {
    console.log(a1);
}

if (a2 != null) {
    console.log(a2);
}

if (a3 != null) {
    console.log(a3);
}