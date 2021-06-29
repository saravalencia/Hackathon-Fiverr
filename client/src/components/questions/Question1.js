import React from 'react';
import gifnoloop from '../../video/gifnoloop.gif'
import styled from 'styled-components'

const H3 = styled.button`
font-size: 3rem;
background-color: white;
border: none;
display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: absolute;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
  text-align: justify;
  


  @media screen and (max-width: 700px){
        left: 20vh;
        font-size: 3rem;
       padding-top: 2rem;
       width: 500px;
       text-align: justify;
    }

`;

const Button = styled.button`
  
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 30px;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  width: 400px;
  height: 100px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
  margin-top: 50px;

&:hover {
  background: #fff;
  box-shadow: 0px 2px 10px 5px #1abc9c;
  color: #000;
}

&:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

&:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

&:focus { outline:0; }

@media screen and (max-width: 700px){
left: 20vh;

}`;

  const Div = styled.div`
  position:relative;
	margin:auto;
	width:100%;
	height:100%;
  text-align:center;
  padding:30vh 0;
    
    `;

function Question1() {
    return (
      <div className="Question1">
         <img src={gifnoloop}  alt='gif'></img>
         <div>
         <H3>What kind of project are you looking for ?</H3>
         </div>
         <Div>
          <Button>Web App</Button>
          <Button>Graphic Design</Button>
          <Button>Software</Button>
          <Button>E-commerce</Button>
         </Div>
         
       
      </div>
    );
  }
  
  export default Question1;
  