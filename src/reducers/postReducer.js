import { GET_POSTS, ERROR_POSTS, LOADING_POSTS } from '../types/postTypes';

const INITIAL_STATE = {
    posts: [],
    error: null,
    loading: true
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case GET_POSTS: 
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        case LOADING_POSTS:
            return {
                ...state,
                loading: true
            }
        case ERROR_POSTS:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: 
            return state
    }
}
