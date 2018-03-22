import { FETCH_USERS, NEW_USER } from "../actions/types";
import { getAllUsres, postUser } from '../helpers/requstHelper';

export const fetchUsers = () => dispatch => {
    return dispatch({
        type: FETCH_USERS,
        users: getAllUsres()
    });
};

export const addNewUser = (user) => dispatch => {
    return dispatch({
        type: NEW_USER,
        user: postUser({
            name: user.name,
            email: user.email,
            photo: user.photo,
            password: user.password,
            about: 'User didn`t tell about himself',
            registred: new Date()
        })
    });
};