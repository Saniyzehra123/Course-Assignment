import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailData } from '../Redux/Detail/action'
import { getCoursesData } from '../Redux/Course/action'
import "./Coursedetail.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
export default function CourseDetail( ) {
  const [showSyllabus, setShowSyllabus] = useState(false);
  const dispatch =useDispatch()
  const coursedetail=useSelector((state)=> state.details.details)
  const courselist = useSelector((state) => state.courses.courses);

  useEffect(()=>{
   dispatch(getDetailData())
   dispatch(getCoursesData())
  },[])
  console.log("detail",coursedetail)
  // console.log("data",courselist)

  return (
    <Container className='detail'>
      {courselist.map((course)=>(
        <Row key={course.id}>
        <Col xs={12} md={6}>
        <h1>{course.name}</h1>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>enrollmentStatus:{course.enrollmentStatus}</p>
        <p>Course Duration:{course.duration}</p>
        <p>Schedule:{course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Prerequisites:{course.prerequisites}</p>
        </Col>
        </Row>
      ))}

      <Button className="btn" onClick={() => setShowSyllabus(!showSyllabus)}>
      {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
      </Button>

      {showSyllabus && (
        <div>
          <h1 style={{color:"#435585"}}>Syllabus</h1>
          {coursedetail.map((item) => (
            <div key={item.week}>
              <strong style={{color:"#435585"}}>Week {item.week}:</strong> <p>{item.topic}</p> 
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )} 
    </Container>
  )
}
