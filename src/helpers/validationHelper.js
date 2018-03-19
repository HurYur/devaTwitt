export function validateName(username) {
    let re = /[\d]|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    return username.length > 3 && !re.test(username) ? '' : 'Name should be minimum 4 characters and don`t have numbers and symbols';
}

export function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email) ? '' : 'Email is not valid';
}

export function validatePassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}/;
    return re.test(password) ? '' : 'Password should contain minimum 8 characters and have lowercase and uppercase latin letters';
}