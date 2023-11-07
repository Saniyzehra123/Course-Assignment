import * as types from '../actionTypes'
const initialState={
    details:[]
}  

 export const detailReducer=(state = initialState,action)=>{
 const {type,payload} =action;
 switch (type) {
    case types.GET_DETAILS:
    return {
        ...state,
        details:payload,
    }
    default:
        return state;
    
 }
}