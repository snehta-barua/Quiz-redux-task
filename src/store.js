
import {optionReducer } from "./Reducers/optionReducer";
import {createStore,applyMiddleware,combineReducers, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import watchSelectedOption from "./sagas/watcher"


const sagaMiddleWare=createSagaMiddleware();

const rootReducer=combineReducers({
    option:optionReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(watchSelectedOption)

export default store;