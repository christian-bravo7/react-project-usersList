import axios from 'axios';
import { GET_USERS, ERROR_USERS, LOADING_USERS } from '../types/userTypes';

export const getUsers = () => {
    
    return async (dispatch) => {
        dispatch({
            type: LOADING_USERS
        })
        try {
            const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: GET_USERS,
                payload: usersData.data,
            })
        } catch(error) {
            dispatch({
                type: ERROR_USERS,
                payload: error.message
            })
        }
    }
}