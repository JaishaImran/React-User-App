import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { thunk } from 'redux-thunk';
import initialState from './initialState'
import rootReducer from './rootReducers';

// const enhancers = []
const middleware = [thunk]

const composedEnhancers = compose(applyMiddleware(...middleware))

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store;