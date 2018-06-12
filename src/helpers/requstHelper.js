import { requestGet, requestPost } from '../api/ServerEmulating';
import {getCurrentUser} from "./storageHelper";

export function postLike(postId, userId) {
    requestPost(`devaTwitt/posts.${postId}/likes`, userId);
}
export function postComment(postId, newCommentText) {
    let loggedUser = getCurrentUser();
    let newComment = {
        text: newCommentText,
        author: {
            id: loggedUser.id,
            name: loggedUser.name,
            photo: loggedUser.photo
        },
        date: new Date()
    };
    requestPost(`devaTwitt/posts.${postId}/comments`, newComment);
}
export function postPost(newPostText) {
    let loggedUser = getCurrentUser();
    let newPost = {
        publication: newPostText,
        author: {
            id: loggedUser.id,
            name: loggedUser.name,
            photo: loggedUser.photo
        },
        date: new Date()
    };
    requestPost('devaTwitt/posts', newPost);
}
export function postUser(newUser) {
    requestPost('devaTwitt/users', newUser);
}
export function postUserOnline(loggedData) {
    requestPost('devaTwitt/users', loggedData);
}

export function followUser(followUserId) {
    requestPost(`devaTwitt/users/${followUserId}/follow`, getCurrentUser().id);
}

export function getAllUsres() {
    return requestGet('devaTwitt/users');
}
export function getAllPosts() {
    return requestGet('devaTwitt/posts');
}
export function followedPosts() {
    return requestGet('posts/followed', getCurrentUser().id);
}