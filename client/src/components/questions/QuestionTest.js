import React, {useState} from 'react';
import gifTransparent from '../../video/gifTransparent.gif'
import styled from 'styled-components'
import questions from '../questions/questions.jpg'
import SaveQuestion from './SaveQuestion';
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
      let [selectedAnswer, setSelectedAnswer] = useState([]);


      const handleAnswer = (answers) => {

        setSelectedAnswer([...currentQuestion, answers])
      console.log(setSelectedAnswer)
     
     };
      return (
        
          <DivHome> 
            <ImgLogo src={gifTransparent}  alt='gif'></ImgLogo>

            

            <DivShadow>
                
                <H2>Question Title</H2>
               <DivQuestion>
                {questions[currentQuestion].answerOptions.map((answerOption) => (
							<p ><SaveQuestion handleAnswer={handleAnswer}
                            info={questions[currentQuestion].answerOptions}/>{answerOption.answerText}</p>
                            
						))}
                
               </DivQuestion>
            </DivShadow>
         </DivHome>  
        
      );
    }
    
    export default QuestionTest;
    