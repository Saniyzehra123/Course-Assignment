import * as types from "../actionTypes";
import axios from 'axios';
 
const getCourses = (payload)=>({
type:types.GET_COURSES,
payload
})


export const  getCoursesData = () => {
    return async (dispatch) => {
      try {
        // Make an API request using Axios
        const response = await axios.get('http://localhost:8080/courseModel');
   
        const courseData = response.data;
   
        dispatch(getCourses(courseData));
      } catch (error) {
        console.error('Error fetching courses:', error);
       
      }
    };
  };
   
  
  
  
  
  
  
  

// export const getCourseData =(payload)=>{
//     return (dispatch) => {
//         // dispatch(getTShirt());
//         axios.get(`https://nice-blue-zebra-hose.cyclic.app/api/tshirt`,{
//             params:{
//                 ...payload,
//             }
//         })
//             .then(response => {
//                 dispatch(getTShirtSuccess(response.data));
//                // console.log("raj",response.data);
//             }).catch(error => {
//                 dispatch(getTShirtFailure(error));
//             }
//         );
//     }
//     }

