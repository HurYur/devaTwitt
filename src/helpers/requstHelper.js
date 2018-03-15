export function requestGet(url, handleErrors = true) {
    return JSON.parse(localStorage.getItem(url));
}

export function requestPost(url, updateData, handleErrors = true) {
    let data = JSON.parse(localStorage.getItem(url));
    data.push(updateData);
    console.log(data);
    return localStorage.setItem(url, JSON.stringify(data));
}
export function requestPut(url, updateData, handleErrors = true) {
    let data = JSON.parse(localStorage.getItem(url));
    data.push(updateData);
    console.log(data);
    return localStorage.setItem(url, JSON.stringify(data));
}