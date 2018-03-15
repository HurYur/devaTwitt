export function validateName(username) {
    let re = /[\d]|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    return username.length > 3 && !re.test(username);
}

export function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email)
}

export function validatePassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}/;
    return password.length > 4 && re.test(password);
}