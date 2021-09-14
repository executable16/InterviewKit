/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USER } from "../actions/types";

export default function (state = null,action){
    switch(action.type){

        /* Basically action.payload would contain data i.e user information like googleId.. bla bla 
           if the user is logged in or else we will return false
        */
        case FETCH_USER:
            return action.payload || false
        default:
            return state;
    }
}

// return (action.payload.data === '') ?  false :  action.payload
