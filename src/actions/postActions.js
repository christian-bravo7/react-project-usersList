import axios from 'axios';
import { ERROR_POSTS, LOADING_POSTS, GET_POSTS } from '../types/postTypes';

export const getPostsById = (id) => {
    
    return async (dispatch) => {
        dispatch({
            type: LOADING_POSTS
        })
        try {
            const postsData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            dispatch({
                type: GET_POSTS,
                payload: postsData.data
            })
        } catch(error) {
            dispatch({
                type: ERROR_POSTS,
                payload: error.message
            })
        }
    }
}
