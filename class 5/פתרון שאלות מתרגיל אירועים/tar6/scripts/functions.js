
export function changeLink(event) {
    let link = document.querySelector('#link');
    link.innerHTML = 'Google';
    link.href = "https://www.google.co.il";
}

export function clearLink(event){
    let link = document.querySelector('#link');
    link.innerHTML = 'TEXT';
    link.href = "#";
}