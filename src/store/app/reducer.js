import initialState from '../initialState'
import { ActionTypes } from './types';

export default function appReducer(state = initialState.app, action) {
    switch (action.type) {
        case ActionTypes.USER_AUTHENTICATED:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}