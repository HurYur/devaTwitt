export function getCurrentUser() {
    let currentUser = localStorage.getItem('devaTwitt.currentUser');
    return currentUser ? JSON.parse(currentUser) : false;
}

export function setCurrentUser(user) {
    return localStorage.setItem('devaTwitt.currentUser', JSON.stringify(user));
}