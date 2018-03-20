import { FETCH_USERS, NEW_USER } from "../actions/types";
import {getAllUsres} from '../helpers/requstHelper';

export const fetchPosts = () => dispatch => {
    return dispatch({
        type: FETCH_USERS,
        users: getAllUsres()
    });
};