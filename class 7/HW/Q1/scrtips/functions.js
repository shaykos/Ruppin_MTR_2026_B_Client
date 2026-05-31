
export function createCards() {
    let imgs = document.querySelectorAll('#cards img');
    imgs.forEach((img, index) => {
        switch (index + 1) {
            case 1:
            case 12:
                img.src = "./assets/images/1.png";
                break;
            case 2:
            case 11:
                img.src = "./assets/images/2.png";
                break;
            case 3:
            case 10:
                img.src = "./assets/images/3.png";
                break;
            case 4:
            case 9:
                img.src = "./assets/images/4.png";
                break;
            case 5:
            case 8:
                img.src = "./assets/images/5.png";
                break;
            case 6:
            case 7:
                img.src = "./assets/images/6.png";
                break;
        }
    });
}