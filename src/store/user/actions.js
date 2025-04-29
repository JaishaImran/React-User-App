import axios from "axios"
import { ActionTypes as UserActionsTypes } from "./types"
import { ActionTypes as AppActionsTypes } from "../app/types"
import { ActionTypes as ThirdPartyActionsTypes } from "../thirdParty/types"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { GoogleSignin } from "@react-native-google-signin/google-signin"

export const signIn = payload => async dispatch => {
    try {
        const { data } = await axios.post('http://192.168.1.9:5001/login-user', payload)
        dispatch({
            type: AppActionsTypes.USER_AUTHENTICATED,
            payload: {
                authenticated: true
            }
        })
        dispatch({
            type: UserActionsTypes.USER_DETAILS,
            payload: {
                name: data.userData.name,
                email: data.userData.email
            }
        })
        AsyncStorage.setItem('token', data.token);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
    } catch (error) {
        console.error('Error authenticating user:', error);
    }
} 

export const signOut = payload => async dispatch => {
    try {
        dispatch({
            type: AppActionsTypes.USER_AUTHENTICATED,
            payload: {
                authenticated: false
            }
        })
        dispatch({
            type: UserActionsTypes.USER_DETAILS,
            payload: {
                name: '',
                email: ''
            }
        })
        dispatch({
            type: ThirdPartyActionsTypes.THIRD_PARTY_USER_DETAILS,
            payload: {
                name: '',
                email: '',
                photo: null
            }
        })
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('isLoggedIn');
        await GoogleSignin.signOut();
    } catch (error) {
        console.error('Error authenticating user:', error);
    }
} 