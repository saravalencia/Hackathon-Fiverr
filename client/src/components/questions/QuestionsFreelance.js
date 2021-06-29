 import React, {useState} from 'react';
 import gifnoloop from '../../video/gifnoloop.gif'
 import styled from 'styled-components'
 import gifTransparent from '../../video/gifTransparent.gif'
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
 background-color: rgb(220 219 219 / 50%);
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

 function QuestionsFreelance() {

   const questions = [
 		{
 			questionText: 'What kind freelancer you wanto to team with',
 			answerOptions: [
 				{ answerText: 'Web Dev' },
 				{ answerText: 'Graphic Designer' },
 				{ answerText: 'Software Dev' },
 				{ answerText: 'Data Analyst' },
 			],
 		},
 		{
 			questionText: 'Select the languge for your team',
 			answerOptions: [
 				{ answerText: 'English' },
 				{ answerText: 'Spanish' },
 				{ answerText: 'French' },
 				{ answerText: 'German' },
 			],
 		},
 		{
 			questionText: 'Time expectation for the project',
 			answerOptions: [
 				{ answerText: '1 week' },
 				{ answerText: '2 weeks' },
 				{ answerText: '3 weeks' },
 				{ answerText: '1 month +' },
         { answerText: 'To Discuss' },
 			],
 		},
     {
 			questionText: 'Experince required for the job',
 			answerOptions: [
 				{ answerText: '1 year' },
 				{ answerText: '2 years' },
 				{ answerText: '3 years' },
 				{ answerText: '5 +' },
 			],
 		},
     {
 			questionText: 'Web app or mobile only ?',
 			answerOptions: [
 				{ answerText: 'Web' },
 				{ answerText: 'Mobile' },
         { answerText: 'Both' },
 			],
 		},
     {
 			questionText: 'Select a speciality for the job',
 			answerOptions: [
 				{ answerText: 'Front' },
 				{ answerText: 'Back' },
 				{ answerText: 'Both' },
				
 			],
 		},
     {
 			questionText: 'Select skills for the front end project',
 			answerOptions: [
 				{ answerText: 'Javascript' },
 				{ answerText: 'MySQL' },
 				{ answerText: 'PHP' },
 				{ answerText: 'React' },
         { answerText: 'React Native' },
         { answerText: 'Vue' },
         { answerText: 'Angular' },
         { answerText: 'Swift' },
         { answerText: 'MongoDb' },
         { answerText: 'Sass' },
         { answerText: 'Styled components' },
 			],
 		},
     {
 			questionText: 'Select skills for the back end project',
 			answerOptions: [
 				{ answerText: 'Javascript' },
 				{ answerText: 'PHP' },
 				{ answerText: 'Python' },
         { answerText: 'Node JS' },
         { answerText: 'C' },
         { answerText: 'Ruby' },
         { answerText: 'Java' },
         { answerText: 'C#' },
 			],
 		},
     {
 			questionText: 'Do you need a relational or not relational Database',
 			answerOptions: [
 				{ answerText: 'Relational' },
 				{ answerText: 'Not relational' },
				
 			],
 		},
     {
 			questionText: 'What kind of Relational Db do you need ?',
 			answerOptions: [
 				{ answerText: 'MySQL' },
 				{ answerText: 'Postgres' },
         { answerText: 'MariaDB' },
         { answerText: 'Oracle Sql' },
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
            

            

            <DivShadow>
                <ImgLogo src={gifTransparent}  alt='gif'></ImgLogo>
                
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
  
   export default QuestionsFreelance;
  