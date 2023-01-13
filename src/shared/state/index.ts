import { combineReducers, createStore } from 'redux';
import { orderBookReducer } from './reducers';

const rootReducer = combineReducers({
    orderBook: orderBookReducer,
});

const store = createStore(rootReducer);

export default store;
