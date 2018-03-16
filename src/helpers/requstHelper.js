import {requestPost} from '../api/ServerEmulating';
import {getCurrentUser} from "./storageHelper";

let user = getCurrentUser();

export function requestGet(url, handleErrors = true) {
    return JSON.parse(localStorage.getItem(url));
}
export function postLike(postId, userId) {
    requestPost(`devaTwitt.posts.${postId}/likes`, userId);
}
export function postComment(postId, newCommentText) {
    let newComment = {
        text: newCommentText,
        author: {
            id: user.id,
            name: user.name,
            photo: user.photo
        },
        date: new Date()
    };
    requestPost(`devaTwitt.posts.${postId}/comments`, newComment);
}
export function postPost(newPostText) {
    let newPost = {
        publication: newPostText,
        author: {
            id: user.id,
            name: user.name,
            photo: user.photo
        },
        date: new Date()
    };
    requestPost('devaTwitt.posts', newPost);
}

export function requestPut(url, updateData, handleErrors = true) {
    let data = JSON.parse(localStorage.getItem(url));
    data.push(updateData);

    return localStorage.setItem(url, JSON.stringify(data));
}