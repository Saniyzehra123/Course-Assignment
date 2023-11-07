import * as types from "../actionTypes"

const initialState={
    courses:[],
}

export const courseReducer = (state = initialState,action) =>{
    const {type,payload} =action;

    switch(type){
        case types. GET_COURSES:
        return {
            ...state,
            courses:payload,
        }
        default:
        return state;
    }
    
}
// const initialState = {
//   courses: [],
// };

// const yourReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_COURSES:
//       return {
//         ...state,
//         courses: action.payload, 
//       };
//     default:
//       return state;
//   }
// };

// export default yourReducer;
