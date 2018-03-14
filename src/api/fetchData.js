export default function loadData(url, method) {
    return fetch(url, method)
        .then((response) => {
            return response.json();
        })
}
