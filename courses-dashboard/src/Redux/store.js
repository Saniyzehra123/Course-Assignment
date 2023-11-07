import {legacy_createStore as createStore ,combineReducers,applyMiddleware} from "redux";
import {courseReducer} from "./Course/reducer"
import thunk from "redux-thunk"
import yourReducer from './Course/reducer'; 
import { detailReducer } from "./Detail/reducer";
const rootReducer = combineReducers({
   courses:courseReducer,
   details:detailReducer
})

 
export const store = createStore(
    rootReducer,
  // applyMiddleware(middleware)
  applyMiddleware(thunk)

    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
 
 

// const rootReducer = combineReducers({
//   courses: yourReducer, // Add your reducer to the root reducer
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;