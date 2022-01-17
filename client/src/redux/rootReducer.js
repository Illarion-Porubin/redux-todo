// корневой reduce в котором будут собираться все reduce

import { combineReducers } from "redux";

import { itemsReducer } from "../redux/itemsReducer";
// import { appReducer } from "../redux/appReducer";



// эта функция combineReducers объединяет 
// все редюсеры для компонентов


export const rootReducer = combineReducers({
    itemsReducer,
    // appReducer
})