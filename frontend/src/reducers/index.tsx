import {combineReducers} from "redux";
import dummyReducers from "./dummy/dummyReducers";
const rootReducer = combineReducers({
    dummy: dummyReducers,
})

export interface AppState {
    dummy: string
}

export default rootReducer;