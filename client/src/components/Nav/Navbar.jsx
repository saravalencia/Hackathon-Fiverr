import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #1dbf73;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
`;
const LogoContanier = styled.div ` 
  width: 90px;
  display: grid;
  place-items: center;
  
`;

const StyledImage = styled.img ` 
  width: 100%;
  height: auto;
  

`;

const Navbar = () => {
  return (
    <Nav>
        <LogoContanier>
            <StyledImage src="Fiverr.png" alt="logo" />
        </LogoContanier>
      
      <Burger />
    </Nav>
  )
};

export default Navbar;