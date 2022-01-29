import { combineReducers, createStore, applyMiddleware } from "redux";
import { createActions } from 'reduxsauce';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { homeReducer } from "@pages/Home/reducer";
import { coreSaga } from "@saga";


// redux-persist config
const persistConfig = {
    key: 'root',
    storage,
}


const combinedReducers = combineReducers({
    homeReducer
});
export const { Types: appTypes, Creators: appCreators } = createActions({
    logout: []
});
const rootReducer = (state, action) => {
    if (action.type === appTypes.LOGOUT) {
        state = undefined;
    }
    return combinedReducers(state, action);
}

// saga setup
const sagaMiddleware = createSagaMiddleware()

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(coreSaga)
export const persistor = persistStore(store);
