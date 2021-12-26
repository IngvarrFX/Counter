import {counterReducer} from "./counter-reducer";
import {createStore,combineReducers} from "redux";
import {applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunk))

type AppStoreType = typeof store