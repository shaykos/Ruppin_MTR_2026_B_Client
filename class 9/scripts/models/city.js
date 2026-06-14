export default class City {

    symbol_number;
    name_in_hebrew;
    name_in_english;
    name_in_arabic;
    name_in_russian;

    constructor(symbol_number, name_in_hebrew, name_in_english, name_in_arabic, name_in_russian) {
        this.name_in_arabic = name_in_arabic;
        this.name_in_english = name_in_english; 
        this.name_in_hebrew = name_in_hebrew;
        this.name_in_russian = name_in_russian;
        this.symbol_number = symbol_number;     
    }

}


/*
    "_id": 1,
    "symbol_number": 967,
    "name_in_hebrew": "אבו ג'ווייעד (שבט) ",
    "name_in_english": "ABU JUWEI'ID ",
    "name_in_arabic": "أبو جويعد",
    "name_in_russian": null,
    "X": 206977.0073,
    "Y": 565472.1393,
    "Distance_From_Lebanon_Border": 209820,
    "Distance_From_GazaStrip_Border": 62100,
    "Distance_From_Syria_Border": 185510
*/
