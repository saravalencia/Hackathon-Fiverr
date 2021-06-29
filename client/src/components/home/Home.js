import React from 'react';
import styled from 'styled-components'
import gifTransparent from '../../video/gifTransparent.gif'
import home from '../home/background.jpg'

const DivHome = styled.div `
background-image: url(${home});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 800px;


 @media screen and (max-width: 700px){
        width: 100%;
       
        align-items: center;
    }

`;

const ImgLogo = styled.img `
    width: 501px;
    height: 274px;

 @media screen and (max-width: 700px){
        width: 269px;
        height: 163px;
    }
`;

const DivContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const H1 = styled.h1`
padding: 29px;
font-family: 'Josefin Sans',sans-serif;
font-size: 6rem;
background-color: rgb(220 219 219 / 50%);
text-align: center;

@media screen and (max-width: 700px){
  padding: 8px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3.5rem;
  background-color: rgb(220 219 219 / 50%);
  text-align: center;
  width: 80%;
    }

`
const Select = styled.select`
width: 264px;
height: 52px;
font-size: 27px;
border: 2px solid;
border-radius: 26px;
padding-left: 66px;

 @media screen and (max-width: 700px){
        width: 150px;
        height: 30px;
        font-size: 1rem;
        padding-left: 27px;
    }
`

function Home() {
    return (
      <DivHome  >
        <DivContainer>
         <ImgLogo src={gifTransparent}  alt='gif'/>  
        </DivContainer>
        
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
  