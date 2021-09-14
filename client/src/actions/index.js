import axios from 'axios'
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return async function(dispatch){
        try{
            const res = await axios.get('/api/current_user')
            dispatch({ type : FETCH_USER, payload : res.data})
        }catch(err){
            console.log("User is probably not Logged In");
        } 
    }
};