import initialState from '../initialState'
import { ActionTypes } from './types';

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case ActionTypes.USER_DETAILS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}