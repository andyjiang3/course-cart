import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { SectionCol} from "./common/Container"

const ReceiptBody = styled.div`
    display: flex;
    justify-content: center;    
`

const ReceiptContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column; 
`

const ReceiptTitle = styled.h2`
    width: 100%;
    text-align: center;
`

const ReceiptDesc = styled.p`
    text-align: center;
`

const CourseRecContainer = styled.div`
    background-color: #f8f8f8ea;
    border-radius: 5px;
    min-height: 60px;
    padding: 10px 10px;
    width: 100%;
    margin-top: 10px;
`

const CourseRecNumber = styled.h5`
    margin-bottom: 5px;
    font-size: 18px;
`

const CourseRecTitle = styled.p`
    margin-bottom: 0px;
`

const ReceiptRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;



type cartType = Set<string>;


const Receipt = (props:any) => {

    let cart:cartType = props.location.state

    {/* Make sure user is being directed here. If typed in as url, prompt error. Prevent undefined cart error */}
    if (cart === undefined) {
        return (<div><h2>An unexpected error occurred (Undefined cart). Please return to home page.</h2></div>)
    }
    return (
        <>
            <ReceiptRow>
                <SectionCol  percent="50%">
                <ReceiptTitle>Course Receipt</ReceiptTitle>
                <ReceiptDesc>Here are the classes you enrolled for:</ReceiptDesc>
                {/* Map registered courses to components */}
                {console.log(cart.size)}
                {   
                    (Array.from(cart).map( (course) =>(
                        <CourseRecContainer key={(JSON.parse(course)).number}>
                        <CourseRecNumber>{(JSON.parse(course)).dept}{' '} {(JSON.parse(course)).number}</CourseRecNumber>
                        <CourseRecTitle>
                        {(JSON.parse(course)).title}
                        </CourseRecTitle>
                        </CourseRecContainer>
                    ))) 
                }
                </SectionCol>
            </ReceiptRow>
        </>
    )
}

export default Receipt;