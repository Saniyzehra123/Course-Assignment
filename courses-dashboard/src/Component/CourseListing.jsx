import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoursesData } from '../Redux/Course/action';
import { Link } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import "./Courselisting.css"
import { Col, Container, Row } from 'react-bootstrap';
export default function CourseListing() {
  
  const dispatch = useDispatch();
  const courselist = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(getCoursesData());
  }, [])
  console.log("course",courselist)
  
  return (
    <Container className='list container-md'>
    <h1 className='listitle'>Course List</h1>
    <Row>
      {courselist.map((course) => (
        <Col key={course.id}>
          <Link to={`/detail/${course.id}`} className='listname'>
             <p>{course.name} </p>
            <p>{course.instructor}</p> 
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
  )
}
