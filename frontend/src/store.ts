import "regenerator-runtime/runtime";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState: any = {
    defaultUser: "krishna",
};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)


sagaMiddleware.run(rootSagas);   

export default store;