import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesData } from '../Redux/Course/action';
import { Link } from 'react-router-dom';
import CourseDetail from './CourseDetail';

export default function CourseListing() {
  
  const dispatch = useDispatch();
  const courselist = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(getCoursesData());
  }, [])
  console.log("course",courselist)
  
  return (
    <div>
    <h1>Course List</h1>
    {courselist.map((course) => (
        <div key={course.id}>
           <Link to={`/detail/${course.id}`} > {course.name} - {course.instructor}</Link> 
        </div>
      ))}
    </div>
  )
}
