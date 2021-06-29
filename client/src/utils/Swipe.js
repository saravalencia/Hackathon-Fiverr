import React from "react"; 
import TinderCard from 'react-tinder-card'; 
import Bar from "../components/molecules/Bar"; 
import styled from "styled-components"; 

// this is the same as the Question bar from atoms and molecule just here we hadd the tinder swipe effect 

const Swipe = (props) =>{
    const BarSwipe = styled.div`
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

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    
    return (
        
        <TinderCard  onSwipe={onSwipe} onCardLeftScreen={()=> onCardLeftScreen()} preventSwipe={[`up`, `down`]} >
      <BarSwipe>
          {props.questions}
          </BarSwipe>
        </TinderCard>
    )
}

export default Swipe; 