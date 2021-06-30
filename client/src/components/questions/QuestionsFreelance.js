import React, {useState} from 'react';
import gifnoloop from '../../video/gifnoloop.gif'
import styled from 'styled-components'
import gifTransparent from '../../video/gifTransparent.gif'

const H2 = styled.h1`
border: none;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 2.3rem;
  text-shadow: 3px 3px 6px rgba(150, 150, 150, 1);

  @media screen and (max-width: 700px){
        
       margin-bottom: 2rem;
    
       
    }

`;

const Button = styled.button`
  
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  width: 70%;
  height: 4rem;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
  margin-top: 2rem;
  max-width:800px;
}

&:hover {
  background: #fff;
  box-shadow: 0px 2px 10px 5px #1abc9c;
  color: #000;
}

&:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: relative;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  /* margin-top: -120%; */
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


}


    `;

    const Div = styled.div`
    position:relative;
	margin:auto;
	width:100%;
	height:100%;
  text-align:justify;
  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(158,208,255,1) 0%, rgba(213,255,226,1) 100%);
    
    `;

const Image = styled.img`
height: auto ;
width: 100%;
margin: 0 auto;

`;
const ImageWrapper = styled.div`
width: 100%;
max-width:1000px;

`;


function QuestionsFreelance(props) {

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


  const handleQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
    }else{
        props.history.push({
          pathname: "/matches"
          
        }) 
      }
    
    
  }

    return (
      <Div>
        <ImageWrapper>
        <Image src={gifTransparent}  alt='gif'></Image>
        </ImageWrapper>
         
         
         <H2>{questions[currentQuestion].questionText}</H2>
        
         {questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button onClick={handleQuestion}>{answerOption.answerText}</Button>
						))}
          
       
      </Div>
    );
  }
  
  export default QuestionsFreelance;
  