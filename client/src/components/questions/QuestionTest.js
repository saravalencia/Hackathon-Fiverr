import React, {useState, useEffect} from 'react';
import gifTransparent from '../../video/gifTransparent.gif'
import styled from 'styled-components'
import questions from '../questions/questions.jpg'

const DivHome = styled.div `
background-image: url(${questions});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 100vh;




 @media screen and (max-width: 700px){
        width: 100%;
        height: 600px;
        align-items: center;
    }

`;

const H2 = styled.h1`
border: none;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 2.5rem;

  @media screen and (max-width: 700px){
        
       margin-bottom: 2rem;
    
       
    }

`;

const DivShadow = styled.div `
background-color: rgb(220 219 219 / 50%);


`

const DivContainerButtom = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

const ImgLogo = styled.img `
    width: 501px;
    height: 274px;

 @media screen and (max-width: 700px){
        width: 269px;
        height: 163px;
    }
`;

const DivQuestion = styled.div `
font-family: 'Josefin Sans',sans-serif;

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
 


function QuestionTest() {

    const questions = [
          {
              questionText: 'What kind of project are you looking for',
              answerOptions: [
                  { answerText: 'Web Dev' },
                  { answerText: 'Graphic Design' },
                  { answerText: 'Software Dev' },
                  { answerText: 'E-commerce' },
              ],
          },
          {
              questionText: 'Select the languge of your preference',
              answerOptions: [
                  { answerText: 'English' },
                  { answerText: 'Spanish' },
                  { answerText: 'French' },
                  { answerText: 'German' },
              ],
          },
          {
              questionText: 'Select your price range',
              answerOptions: [
                  { answerText: '€ 100 - 200' },
                  { answerText: '€ 300 - 400' },
                  { answerText: '€ 500 - 700' },
                  { answerText: '€ 1000 +' },
              ],
          },
          {
              questionText: 'Time expectation for the project',
              answerOptions: [
                  { answerText: '1 week' },
                  { answerText: '2 weeks' },
                  { answerText: '3 weeks' },
                  { answerText: '1 month +' },
              ],
          },
      ];
  
      const [currentQuestion, setCurrentQuestion] = useState(0);
      let [selectedAnswer, setSelectedAnswer] = useState([questions.answerOptions]);
console.log(selectedAnswer)

 
     
  const handleQuestion =  () => {
    
    console.log('click')
    
  }
  
 
      return (
        
          <DivHome> 
            <ImgLogo src={gifTransparent}  alt='gif'></ImgLogo>

            

            <DivShadow>
                
                <H2>Question Title</H2>
             
               <DivContainerButtom >
               {questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button onClick={handleQuestion}>{answerOption.answerText}</Button>
						))}
                
               </DivContainerButtom >
             
            </DivShadow>
            
         </DivHome>  
        
      );
    }
    
    export default QuestionTest;
    