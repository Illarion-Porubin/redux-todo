// import {
//     LOADER_DISPLAY_ON,
//     LOADER_DISPLAY_OFF,
//     ERROR_DISPLAY_ON,
//     ERROR_DISPLAY_OFF
// } from "./types";

// const initialState = {
//     loading: false,
//     error: null
// }// базовое состояние state


// export const appReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOADER_DISPLAY_ON:
//             return {
//                 ...state, // через оператор ... разворачиваем и возвращаем новый state
//                 loading: true
//             }
//         case LOADER_DISPLAY_OFF:
//             return {
//                 ...state, // через оператор ... разворачиваем и возвращаем новый state
//                 loading: false
//             }
//         case ERROR_DISPLAY_ON:
//             return {
//                 ...state, // через оператор ... разворачиваем и возвращаем новый state
//                 error: action.text
//             }
//         case ERROR_DISPLAY_OFF:
//             return {
//                 ...state, // через оператор ... разворачиваем и возвращаем новый state
//                 error: null
//             }
//         default:
//             return state;
//     }
// }