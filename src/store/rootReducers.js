import { combineReducers } from "redux";
import user from "./user/reducer";
import app from "./app/reducer";
import thirdPartyAuth from "./thirdParty/reducer";

const rootReducer = combineReducers({
    app,
    user,
    thirdPartyAuth
})

export default rootReducer;