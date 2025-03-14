/* 
function dateToMilliseconds(dateString) {

    const parts = dateString.split('.');
    
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    
    return date.getTime(); 
}*/


export function validateDate (text: string) {
    return /^[А-Я][а-яё]*$/.test(text);
}
