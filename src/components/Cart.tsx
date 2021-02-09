import React from 'react'
import styled from 'styled-components'
import empty_img from '../images/empty_cart.svg'

import { CartCard } from "./common/CartCard"
import { ErrorDisplay } from "./common/ErrorDisplay"


const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const CartCount = styled.span`
  height: 22px;
  width: 22px;
  background-color: #ff4a4a;
  border-radius: 50%;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  font-weight: 500;
`

const CartTitle = styled.h2`
  font-size: 22px;

`

type EmptyContainerProps = {
  visibile: boolean;
}

const EmptyContainer = styled.div<EmptyContainerProps>`
  display: ${({ visibile }) => visibile ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visibile }) => visibile ? 'visible' : 'hidden'};
  margin-top: 40px;
`

const EmptyImage = styled.img`
  max-width: 250px;
  max-height: 250px;
`

const CheckOutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`
const CheckOutButton = styled.button`
  background-color: #20c94d;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  width: 50%;
  min-height: 30px;
`

type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};

type CartProps = {
  cart: Set<string>;
  error: boolean;
  errorMsg: string;
  removeCourse: (course: courseType) => void;
}


const Cart = ({
  cart,
  error,
  errorMsg,
  removeCourse}: CartProps) => {
  return (
    <>

    <ErrorDisplay error={error} errorMsg={errorMsg}></ErrorDisplay>

    <CartContainer>
      <TitleContainer>
        <CartCount>{cart.size}</CartCount>
        <CartTitle>Course Cart</CartTitle>
      </TitleContainer>
      
      {/* If cart size is not empty, show all courses in cart.
      Otherwise, show empty cart message */}
      {cart.size > 0 ? (Array.from(cart).map( (course: any) => (
        <CartCard dept={JSON.parse(course).dept}  number={JSON.parse(course).number} 
          title={JSON.parse(course).title} description={JSON.parse(course).description} 
          crosslisted={JSON.parse(course).crosslisted} prereqs={JSON.parse(course).prereqs} removeCourse={removeCourse}></CartCard>
      ))) : 
      (<EmptyContainer visibile={true}>
          <EmptyImage src={empty_img}></EmptyImage>
          <p>You cart is currently empty!</p>
        </EmptyContainer>  )
    
      }

      {/* Only show checkout button if cart is not empty */}
      { cart.size > 0 &&
      <CheckOutContainer>
        <CheckOutButton>Checkout</CheckOutButton>
      </CheckOutContainer>

      }

    </CartContainer>
    </>
  );
};

export default Cart;