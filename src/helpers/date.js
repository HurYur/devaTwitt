export default function parseDate(date){
    let parsedDate = new Date(Date.parse(date)),
        day = parsedDate.getDate(),
        minutes = parsedDate.getMinutes(),
        hours = parsedDate.getHours(),
        month = parsedDate.getMonth() + 1,
        year = parsedDate.getFullYear();

    if( hours < 10 ){
        hours = '0' + hours
    }
    if( minutes < 10 ){
        minutes = '0' + minutes
    }
    if( month < 10 ){
        month = '0' + month
    }
    return `${hours}:${minutes} - ${day}/${month}/${year}`
}