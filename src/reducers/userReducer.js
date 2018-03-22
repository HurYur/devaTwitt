import { FETCH_USERS, NEW_USER } from "../actions/types";

const initialState = {
  users: [],
  user: {}
};

export default (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case NEW_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state;
    }
}