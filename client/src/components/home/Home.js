import React from 'react';
import styled from 'styled-components'
import gifTransparent from '../../video/gifTransparent.gif'
import home from '../home/background.jpg'

const DivHome = styled.div `
background-image: url(${home});
background-size: cover;
width: 100%;
height: 650px;

`
const ImgLogo = styled.img `
width: 219px;
height: 141px;
`;

const DivContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
padding: 8px;
font-family: 'Josefin Sans', sans-serif;
font-size: 3.5rem;
background-color: rgb(220 219 219 / 50%);
text-align: center;
width: 80%;

`
const Select = styled.select`
width: 150px;
height: 30px;
`

function Home() {
    return (
      <DivHome  >
        
        <ImgLogo src={gifTransparent}  alt='gif'/> 
        <DivContainer>
        <H1>
          Find your Match!
        </H1>
        <Select>
          <option value="frelance">Freelancer</option>
          <option value="Client" selected>Client</option>
        </Select>
        </DivContainer>
      

      </DivHome>
          
    );
  }
  
  export default Home;
  