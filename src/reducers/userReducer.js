import {GET_USERS, ERROR_USERS, LOADING_USERS} from '../types/userTypes';

const INITIAL_STATE = {
    users: [],
    error: null,
    loading: true
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case GET_USERS: 
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null
            }
        case ERROR_USERS:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOADING_USERS:
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }

}
