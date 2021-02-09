import React from 'react'
import styled from "styled-components";

const NavContainer = styled.div`
  margin: 15px 10px 15px 10px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
const NavTitle = styled.h2`
  margin: 0px;
  font-size: 26px;
`
const VersionTitle = styled.h3`
  margin: 0 0 0 5px;
  font-size: 16px;
  color: #737373;
  font-weight: 600;
`

const Nav = () => {
  return (
    <NavContainer>
      <NavTitle>Penn Course Cart</NavTitle>
      <VersionTitle>v2.0</VersionTitle>
    </NavContainer>
  );
};

export default Nav;
