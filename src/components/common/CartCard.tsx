import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import { calcCourseNumColor } from "../../functions/utils"

//CartListContainer grid
const CartListContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin-top: 20px;
`

//CartCourseContainer flex
const CartCourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(199,199,199,0.8);
  padding-bottom: 10px;
  margin-bottom: 20px;
`
type CourseNumContainerProps = {
    courseNum: number;
}

//CartCourseNum
const CartCourseNum = styled.div<CourseNumContainerProps>` 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 5px;
  background: ${({ courseNum }) => calcCourseNumColor(courseNum) || '#588afc'};;
  margin-right: 10px;
  flex-direction: column;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  box-shadow: 0px 2px 3px 1px rgb(196, 196, 196, 0.5);

  span:nth-child(1) {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 1px;
  }

  span:nth-child(2) {
    font-size: 16px;
  }
`
//CartCourseTitle
const CartCourseTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 100%;

  &:hover {
    font-size: 15px;
    transition-duration: 0.7s;
  }
`
const CartCourseArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adadad;
  font-size: 20px;
  float: right;

  &:hover {
    color: #ff4a4a;
    transition-duration: 0.1s;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};

interface CartCardProps {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
    removeCourse: (course: courseType) => void;
}


export const CartCard = ({ 
    dept,
    number,
    title,
    crosslisted,
    prereqs,
    description,
    removeCourse}: CartCardProps) => (

    

    <>
        <CartCourseContainer>
          <CartCourseNum courseNum={number}><span>CIS</span><span>{number}</span></CartCourseNum>
          <TitleContainer>
            <CartCourseTitle>{title}</CartCourseTitle>
            <CartCourseArrow onClick={() => removeCourse({dept, number, title, crosslisted, prereqs, description})}>
              <CloseIcon fontSize='inherit'></CloseIcon>
            </CartCourseArrow>
          </TitleContainer>
          
        </CartCourseContainer>
    </>

);