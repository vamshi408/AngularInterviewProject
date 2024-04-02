
import * as StateManagement from "@ngrx/store";

let initialState = {
    name: "",
    mail: "",
    mobile: ""
}


export function userReducer(state = initialState, action:any) {

    switch (action.type) {
        case 'name-edit':
            return {
                ...state, name: action.payload
            };
        case 'mail-edit':
            return {
                ...state, mail: action.payload
            };
        case 'mobile-edit':
            return {
                ...state, mobile: action.payload
            }
        default:
            return state;
    }

}