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
  


  @media screen and (max-width: 700px){
        left: 20vh;
        font-size: 3rem;
       padding-top: 2rem;
       width: 500px;
       text-align: justify;
    }

`;

function Question1() {
    return (
      <div className="Question1">
         <img src={gifnoloop}  alt='gif'></img>
         <div>
         <H3>What kind of project are you looking for ?</H3>
         </div>
         
       
      </div>
    );
  }
  
  export default Question1;
  