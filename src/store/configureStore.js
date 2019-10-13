import { combineReducers, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import userReducer from './reducers/user';

const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancer = compose;

if(__DEV__){
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    let store = createStore(persistedReducer, composeEnhancer());
    let persistor = persistStore(store);
    return {store, persistor};
}

export default configureStore;
