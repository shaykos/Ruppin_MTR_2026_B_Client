// פונקציה שמקבלת את שם המשתמש ואת הגיל ומדפיסה אם הוא יכול להיכנס לבר או לא
export function canEnterTheBar(name, age) {
    if (age < 18)
        alert(`מצטערים ${name} אבל לא ניתן להיכנס לבר`);
    else {
        alert(`ברוכים הבאים  ${name} לבר השכונתי`);
    }
}