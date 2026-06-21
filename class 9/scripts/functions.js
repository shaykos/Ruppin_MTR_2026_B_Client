import City from './models/city.js';

export async function getAllCities() {
    try{
        let response = await fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=e9701dcb-9f1c-43bb-bd44-eb380ade542f");
        console.log('response --> ', response);
        let data = await response.json();
        console.log('data --> ', data);
        if (data.success)
            createCitiesArray(data.result.records);
    }
    catch(error){
        alert('הייתה שגיאה!');

    }
}

function createCitiesArray(array) {
    let cities = [];
    array.forEach(item => {
        cities.push(new City(item.symbol_number, item.name_in_hebrew, item.name_in_english, item.name_in_arabic, item.name_in_russian));
    });
    renderAutocompleteList(cities);
}

function renderAutocompleteList(cities) {
    let list = document.querySelector('#cities');

    cities.forEach((city) => {
        let option = document.createElement('option');
        option.textContent = city.symbol_number;
        option.value = `${city.name_in_hebrew}|${city.name_in_english}|${city.name_in_arabic}|${city.name_in_russian}`;
        list.append(option);
    });
}