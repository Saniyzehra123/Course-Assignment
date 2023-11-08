import * as types from "../actionTypes";
import axios from 'axios';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
 
const getCourses = (payload)=>({
type:types.GET_COURSES,
payload
})

  export const getCoursesData = () => {
    return async (dispatch)=>{
        try{
            const response = await axios.get('https://sttudent.onrender.com/api/courseModel')
            const courseData= response.data
           
            dispatch(getCourses(courseData));
        }
        catch(error){
            console.error('Error fetching detail:', error);
         }
    }
}
  
  
  
  
  
  

