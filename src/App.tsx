import React, { useState, useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import Filter from "./components/Filter"
import courses from "./data/courses.json";

import styled from "styled-components";
import { SectionCol, Row } from "./components/common/Container"

const CourseSection = styled(SectionCol)`
  justify-content: flex-start;
  display: flex;
  box-sizing: border-box;
  background: #f7f7f7;
  padding: 10px 38px 10px 38px;
  flex-direction: column;
`;

const FilterSection = styled(SectionCol)`
  position: sticky;
  top: 0px;
  height: 100vh;
`;

const CartSection = styled(SectionCol)`
  position: sticky;
  top: 0px;
  height: 100vh;
`;

type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};


const App = () => {
  const [cart, setCart] = useState<Set<string>>(new Set([]));
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [courseData, setCourseData] = useState<Array<courseType>>(courses);

  // Add course function
  const addCourse = (course: courseType): void => {
    //Make sure cart size is less than 7
    if (cart.size < 7) {
      if (error) {
        setError(false)
      }

      //convert course into string
      let stringCourse = JSON.stringify(course)
      let newCart = new Set(cart)
      newCart.add(stringCourse)
      setCart(newCart)
    } else {
      setError(true);
      setErrorMsg("You cannot enroll for more than 7 courses.");
    }
  }

  const removeCourse = (course: courseType): void => {
    //convert course into string
    let stringCourse = JSON.stringify(course)

    //only remove if has course
    if (cart.has(stringCourse)) {
      if (error) {
        setError(false)
      }
      //create new set
      let newCart = new Set(cart)
      //delete course from set
      newCart.delete(stringCourse);
      setCart(newCart);
    } else {
      setError(true);
      setErrorMsg("You cannot delete a course that is not in your cart.");
    }
  }

  const updateCourseData = (courseDataInput: Array<courseType>): void => {
    setCourseData(courseDataInput)
  }

  useEffect(() => {
  }, [cart, error, courseData])

  return (
    <>
      <Row>
        <FilterSection percent="25%">
        <Nav />
        <Filter updateCourseData={updateCourseData} courses={courses}/>
        </FilterSection>
        <CourseSection percent="50%">
          <Courses cart={cart} addCourse={addCourse} removeCourse={removeCourse} courses={courseData}/>
        </CourseSection>
        <CartSection percent="25%">
          <Cart cart={cart} error={error} errorMsg={errorMsg} removeCourse={removeCourse}/>
        </CartSection>
      </Row>
      
    </>
  );
};

export default App;
