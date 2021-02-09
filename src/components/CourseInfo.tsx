import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Modal from 'react-modal';



const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '500px',
      minHeight: '500px',
      maxWidth: '500px',
      maxHeight: '500px',
      boxShadow: '0px 2px 3px 1px rgb(196, 196, 196, 0.5);'
    }
  };
const AddRemoveContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`
const AddRemoveButton = styled.button`
  background-color: #20c94d;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  width: 50%;
  min-height: 30px;
`

const CourseTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const SubContainer = styled.div`
  margin-bottom: 8px;
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const SubText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

type courseType = {
    dept: string;
    number: number;
    title: string;
    crosslisted?: string[];
    prereqs?: string[];
    description: string;
  };
  
type CourseInfoProps = {
    course: courseType;
    visible: boolean;
    setVisible: (vis:boolean) => void;
    addCourse: (course: courseType) => void;
    removeCourse: (course: courseType) => void;
    cart: Set<string>;
};

const CourseInfo = ({
    course,
    visible,
    setVisible,
    addCourse,
    removeCourse,
    cart}: CourseInfoProps) => {

    useEffect(() => {
    }, [visible])

    const closeModal = () => {
        setVisible(false)
    }

    const courseInCart = (courseCart: courseType): boolean => {
        let stringCourse = JSON.stringify(courseCart)
        return cart.has(stringCourse)
    }

    return (
      <>
            <Modal isOpen={visible} onRequestClose={closeModal} style={customStyles}>
                <CourseTitle>{course.dept} {' '} {course.number} - {course.title}</CourseTitle>
                <SubContainer>
                    <SubTitle>Description: </SubTitle>
                    <SubText>{course.description}</SubText>
                </SubContainer>
                <SubContainer>
                    <SubTitle>Prerequisite: </SubTitle>
                    <SubText>{(course.prereqs && course.prereqs.length != 0) ? "" : "None"}</SubText>
                    {course.prereqs && course.prereqs.length != 0 &&
                                course.prereqs.map( (prereq) => (
                                    <SubText>{prereq}, </SubText>
                                ))}
                </SubContainer>

                <AddRemoveContainer>
                    {courseInCart(course) ? <AddRemoveButton onClick={() => removeCourse(course)}> Remove from Cart </AddRemoveButton> :
                    <AddRemoveButton onClick={() => addCourse(course)}> Add to Cart </AddRemoveButton>}
                </AddRemoveContainer>
            </Modal>
        
      </>
    );
  };
  
  export default CourseInfo;