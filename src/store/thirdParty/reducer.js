import initialState from '../initialState'
import { ActionTypes } from '../thirdParty/types';

export default function thirdPartyReducer(state = initialState.thirdPartyAuth, action) {
    switch (action.type) {
        case ActionTypes.THIRD_PARTY_USER_DETAILS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}