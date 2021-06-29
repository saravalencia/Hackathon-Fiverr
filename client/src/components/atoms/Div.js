import React from "react"; 
import styled from "styled-components"; 


const QuestionenBar = styled.div`
 width: 289px; 
 height: 70px;
 border-radius: 12px; 
 display: flex; 
 justify-content: center; 
 align-items: center; 
 background-color:${props => props.theme.colors.fiverrGreen}; 
 color: ${props => props.theme.colors.powderWhite}; 
 font-size: ${props => props.theme.fontSizes.medium}
`; 

export default QuestionenBar; 