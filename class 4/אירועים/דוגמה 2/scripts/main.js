
import { checkPassword, updateBtnClicked, validatePassword } from "./functions.js";

document.querySelector("#password").addEventListener('blur', checkPassword);
document.querySelector("#password_validation").addEventListener('blur', validatePassword);
document.querySelector("#update_password").addEventListener('submit', updateBtnClicked);

/*
על הטופס עצמו submit כאשר עובדים עם טפסים - האירוע של לחיצה על כפתור שליחה בטופס חייב להיות אירוע של 
על כפתור click ולא סתם אירוע 
גם מרענן את הדף כפעולת ברירת מחדל ונרצה לבטל זאת submit נזכור שאירוע 
*/