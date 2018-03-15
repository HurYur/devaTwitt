export function requestGet(url, handleErrors = true) {
    return JSON.parse(localStorage.getItem(url));
}

export function requestPost(url, data, handleErrors = true) {
    return localStorage.setItem('devaTwitt.users', data);
}
export function requestPut(url, updateData, handleErrors = true) {
    let data = JSON.parse(localStorage.getItem(url));
    data.push(updateData);
    console.log(data);
    return localStorage.setItem(url, JSON.stringify(data));
}