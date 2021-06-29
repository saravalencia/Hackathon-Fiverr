import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-right: 5%;
  font-family: Domine;
  font-weight: bold;

  

  li {
    padding: 18px 10px;
    &:hover {
     color: #29b34c;
    }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #108b44;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }

  
    }

  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Favorites</li>
      <li>Messages</li>
      <li>About us</li>
      <li>Sign In</li>
    </Ul>
  )
}

export default RightNav;