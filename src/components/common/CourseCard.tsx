import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ShowMore from 'react-show-more';

import { SectionCol, Row } from "./Container"
import { calcCourseNumColor } from "../../functions/utils"

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import CourseInfo from "./../CourseInfo"

const CourseContainer = styled.div`
  display: flex;
  border-radius: 12px;
  height: auto;
  width: auto;
  padding: 10px;
  background: #ffffff;
  box-shadow: 5px 5px 20px #f2f2f2;
  align-items: top;
  flex-direction: column;
  transition-duration: 0.7s;

  &:hover {
    transform: scale(1.05);
    transition-duration: 0.7s;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const CourseTitle = styled.div`
  font-size: 17px;
  margin: 0;
  font-weight: 500;
`;
  
  type CourseNumContainerProps = {
    courseNum: number;
  }
  const CourseNumContainer = styled.div<CourseNumContainerProps>`
    display: flex;
    border-radius: 5px;
    min-height: 35px;
    min-width: 35px;
    max-height: 40px;
    background: ${({ courseNum }) => calcCourseNumColor(courseNum) || '#588afc'};
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
  `;
  
  const CourseDesc = styled.p`
    font-size: 13px;
    margin: 0 0 0 45px;
  `;

  const IconContainer = styled.div`
    padding-top: 8px;
    padding-right: 5px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    float: right;
  `
  type courseType = {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
  };

  interface CourseCardProps {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
    cart: Set<string>;
    addCourse: (course: courseType) => void;
    removeCourse: (course: courseType) => void;
  }


  export const CourseCard = ({
    dept, 
    number,
    title,
    crosslisted,
    prereqs,
    description,
    cart,
    addCourse,
    removeCourse
    }: CourseCardProps) => {

    const [courseInfo, setCourseInfo] = useState<courseType>();
    const [showInfo, setShowInfo] = useState<boolean>(false);

    useEffect(() => {
      console.log("changed")
    }, [showInfo])

    const showCourseInfo = (course: courseType): void => {
      setCourseInfo(course)
      setShowInfo(true)
    }

    const courseInCart = (course: courseType):boolean => {
      let stringCourse = JSON.stringify(course)
      return cart.has(stringCourse)
    }

    return (
    <>
    <CourseContainer>
      <Row>
      <SectionCol percent="85%" onClick={() => showCourseInfo({dept, number, title, crosslisted, prereqs, description})}>
          <TitleContainer>
            <CourseNumContainer courseNum={number}>{number}</CourseNumContainer>
            <CourseTitle key={`${dept}-${number}`}>{title}</CourseTitle>
          </TitleContainer>
          <CourseDesc>
            <ShowMore lines={3} more='Show more'>
              {description}
            </ShowMore>
          </CourseDesc>
      </SectionCol>

      <SectionCol percent="15%">
        {/* If course in cart, show delete from cart icon and allow user to delete, opposite otherwise */}
        <IconContainer>
          {courseInCart({dept, number, title, crosslisted, prereqs, description}) ? <RemoveShoppingCartIcon fontSize='default'  onClick={() => removeCourse({dept, number, title, crosslisted, prereqs, description})}></RemoveShoppingCartIcon>
          : <AddShoppingCartIcon fontSize='default'  onClick={() => addCourse({dept, number, title, crosslisted, prereqs, description})}></AddShoppingCartIcon>}
        </IconContainer>
      </SectionCol>
      </Row>
          
    </CourseContainer>

    {courseInfo && 
    <CourseInfo course={courseInfo} visible={showInfo} setVisible={setShowInfo} 
        addCourse={addCourse} removeCourse={removeCourse} cart={cart}></CourseInfo>} 
    </>
    )
  }




