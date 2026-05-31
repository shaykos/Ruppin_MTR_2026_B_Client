let letter = prompt("כתבו אות");
let div = document.querySelector("#img_holder");
let imgURL = '';
switch (letter) {
    case 'א':
        imgURL = "https://cdna.wobily.com/images/80d3ea9a-ebb9-4352-a0c6-57f5012d523f_500.jpg"
        break;
    case 'ב':
        imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYUTqFWEnuRo37j3kiMC9dGIaobCm2vCJZA&s"
        break;
    case 'ג':
        imgURL = "https://www.container.org.il/wp-content/uploads/2024/10/%D7%9B%D7%9E%D7%94-%D7%A2%D7%95%D7%9C%D7%94-%D7%92%D7%9E%D7%9C.jpg"
        break;
    case 'ד':
        imgURL = "https://alondoors.co.il/wp-content/uploads/2023/04/%D7%91%D7%98%D7%95%D7%9F-%D7%9C%D7%9E%D7%99%D7%A0%D7%98%D7%95-1.png"
        break;
    case 'ה':
        imgURL = "https://www.bialik-mashtelot.com/images/itempics/1036_31082022012659_large.jpg"
        break;
    case 'ו':
        imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskiueYWNc4EtEUfxRe333EUSs2UsFWN9R3Q&s"
        break;
    case 'ז':
        imgURL = "https://www.italianflora.com/wp-content/uploads/2021/06/Orange-roses-and-lilies-bouquet-1-600x600.png"
        break;
    case 'ח':
        imgURL = "https://www.italianflora.com/wp-content/uploads/2021/06/Orange-roses-and-lilies-bouquet-1-600x600.png"
        break;
    case 'ט':
        imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMhuIz85rb16KkkGWyZc8eiBZHRYLnrvVZQ&s"
        break;
    case 'י':
        imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN81lnkmTjmunkywbkxp8WsuPJjN-wL_iQgg&s"
        break;
    default:
        imgURL = "https://www.y4pc.co.il/wp-content/uploads/2016/10/how-to-check-if-website-is-working4.jpg";
        break;
}

div.innerHTML = `<img src="${imgURL}"/>`;