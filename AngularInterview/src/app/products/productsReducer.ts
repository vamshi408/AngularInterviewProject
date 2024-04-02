
import * as StateManagement from "@ngrx/store";

let initialState = {
    productid: "",
    productname: "",
    coast: ""
}


export function productReducer(state = initialState, action:any) {

    switch (action.type) {
        case 'productid-edit':
            return {
                ...state, productid: action.payload
            };
        case 'productname-edit':
            return {
                ...state, productname: action.payload
            };
        case 'coast-edit':
            return {
                ...state, coast: action.payload
            }
        default:
            return state;
    }

}