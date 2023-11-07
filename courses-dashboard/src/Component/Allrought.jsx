import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseDetail from './CourseDetail'
import CourseListing from './CourseListing'

export default function Allrought() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<CourseListing/>}></Route>
        <Route path='/detail/:id' element={<CourseDetail/>}></Route>
      </Routes>
    </div>
  )
}
