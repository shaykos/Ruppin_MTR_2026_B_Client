
export function convertLetters(arr) {
    //בדיקה האם המערך מכיל רק אותיות - אפשרות 1
    // if (arr.some((item) => { return !(item >= 'A' && item <= 'Z' || item >= 'a' && item <= 'z') })) {
    //     alert('Invalid array content');
    //     return null;
    // }

    //בדיקה האם המערך מכיל רק אותיות - אפשרות 2
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!(item >= 'A' && item <= 'Z' || item >= 'a' && item <= 'z')) {
            alert('Invalid array content');
            return null;
        }
    }

    let newArr = arr.map((item) => {
        if (item >= 'a' && item <= 'z')
            return item.toUpperCase();
        else
            return item.toLowerCase();
    });

    return newArr;
}