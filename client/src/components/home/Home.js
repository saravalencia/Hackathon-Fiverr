import React from 'react';
import styled from 'styled-components'
import gifTransparent from '../../video/gifTransparent.gif'
import home from '../home/background.jpg'
import { useHistory, Link } from 'react-router-dom';



const DivHome = styled.div `
background-image: url(${home});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 100vh;


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
const DivContainerButtom = styled.div `
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
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


const Button = styled.button`
margin: 37px;
width: 325px;
height: 80px;
font-size: 2rem;
border: 0px solid transparent;
background-color: rgb(220 219 219 / 50%);;
border-radius: 4 px;
text-transform: uppercase;
transition: all 0.3s;
position: relative;
cursor: pointer;
font-family: 'Josefin Sans',sans-serif;

&:after{
  content: "";
  width: 50px;
  height: 20px;
  border-top: 8px solid #1DBF73;
  border-left: 8px solid #1DBF73;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top:0;
  transition: all 0.2s;
}

&:before{
  content: "";
  width: 50px;
  height: 20px;
  border-bottom: 8px solid #1DBF73;
  border-right: 8px solid #1DBF73;
  position: absolute;
  left: -1;
  right: 0;
  bottom: 0;
  top: -1;
  transition: all 0.2s;
}

&:hover:after{
  width: 340px;
  height: 90px;
}

&:hover:before{
  width: 340px;
  height: 90px;
}

@media screen and (max-width: 700px){
margin: 8px;
width: 205px;
height: 50px;
font-size: 1.5rem;
border: 0px solid transparent;
background-color: rgb(220 219 219 / 50%);;
border-radius: 4 px;
text-transform: uppercase;
transition: all 0.3s;
position: relative;
cursor: pointer;
font-family: 'Josefin Sans',sans-serif;

&:after{
  content: "";
  width: 50px;
  height: 20px;
  border-top: 4px solid #1DBF73;
  border-left: 4px solid #1DBF73;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top:0;
  transition: all 0.2s;
}

&:before{
  content: "";
  width: 50px;
  height: 20px;
  border-bottom: 4px solid #1DBF73;
  border-right: 4px solid #1DBF73;
  position: absolute;
  left: -1;
  right: 0;
  bottom: 0;
  top: -1;
  transition: all 0.2s;
}

&:hover:after{
  width: 220px;
  height: 55px;
}

&:hover:before{
  width: 220px;
  height: 55px;
}  
    }
`
 


function Home() {

  let history = useHistory();

  function handleChange(value) {
    history.push(`/${value}`);
  }

    return (
      <DivHome  >
        <DivContainer>
         <ImgLogo src={gifTransparent}  alt='gif'/>  
         <H1>
          Find your Match!
        </H1>

        <Select onClick={event => handleChange(event.target.value)}>
          
          <option value="questions-freelancer">Freelancer</option>
         
          <option value="questions" selected>Client</option>
        </Select>


        </DivContainer>
        
        <DivContainerButtom>        
        <Button> Freelancer</Button>
        <Button> Client </Button>
        </DivContainerButtom>
      

      </DivHome>
          
    );
  }
  
  export default Home;
  