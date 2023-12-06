import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import mainReducer from "./MainP-reducer";
import drugsReducer from "./DrugsP-reducer";
import favouriteReducer from "./Favourites-reducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    drugsPage: drugsReducer,
    favouritesPage: favouriteReducer
})

let store = legacy_createStore(reducers)

window.store = store;
export default store;