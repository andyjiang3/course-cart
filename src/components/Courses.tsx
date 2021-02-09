import React, {useState, useEffect} from "react";
import courses from "../data/courses.json";
import styled from "styled-components";

import { CourseCard } from "./common/CourseCard"




const CoursesGrid = styled.div`
  display: grid;
  grid-gap: 25px 30px;
  grid-auto-flow: row;
`;

const CourseSearch = styled.input`
    min-height: 40px;
    font-size: 15px;
    border: 1px solid rgba(199, 199, 199, 0.8);
    border-radius: 6px;
    padding: 0px 10px 0px 10px;
    outline: none;
    margin: 20px 0 20px 0;
    background: #ffffff;
`;

type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};

type CoursesProps = {
  cart: Set<string>;
  addCourse: (course: courseType) => void;
  removeCourse: (course: courseType) => void;
}

const Courses = ({
  cart, 
  addCourse,
  removeCourse} : CoursesProps) => {

  return (
    <>
    <CourseSearch placeholder="Search courses by name, description, or keyword"></CourseSearch>
    <h3>Computer Science Courses</h3>
    <CoursesGrid>
      {courses.map(({ dept, number, title, crosslisted, prereqs, description}: courseType) => (
          <CourseCard dept={dept} number={number} title={title} crosslisted={crosslisted} prereqs={prereqs} description={description} 
          cart={cart} addCourse={addCourse} removeCourse={removeCourse}></CourseCard>
       ))}

    </CoursesGrid>

    </>
  );
};

export default Courses;
