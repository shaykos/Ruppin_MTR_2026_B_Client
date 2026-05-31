export function changeBodyColor(event){
    let body = document.querySelector('body');
    let color = event.target.innerHTML;
    body.style.backgroundColor = color;
}