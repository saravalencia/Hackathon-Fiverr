import React from "react"; 
import style from "styled-components"; 
import QuestionenBar from "../atoms/Div.js"; 



// this is a Question bar component where the question will appear in a bar

const Bar = (props) =>{

    return(
  <QuestionenBar>
      {props.question}
      </QuestionenBar>
   

    ); 
}

export default Bar;  