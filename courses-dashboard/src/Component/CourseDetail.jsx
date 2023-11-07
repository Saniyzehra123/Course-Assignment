import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailData } from '../Redux/Detail/action'
import { getCoursesData } from '../Redux/Course/action'

export default function CourseDetail( ) {
  const dispatch =useDispatch()
  const coursedetail=useSelector((state)=> state.details)
  const courselist = useSelector((state) => state.courses.courses);

  useEffect(()=>{
   dispatch(getDetailData())
   dispatch(getCoursesData())
  },[])
  console.log("detail",coursedetail)
  console.log("data",courselist)

  return (
    <div>
      course detail
    </div>
  )
}
