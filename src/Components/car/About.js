import React from 'react'
import styledComponents from "styled-components";
import Fade from 'react-reveal/Fade';

function About({title, descripition, miH, miP, mphH, mphP, milH ,milP, hpH, hpP,  rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{descripition}</p>
      </ItemText>
      

      <ButtonGroup>
         
        <ItemTexts>
        <h2>{miH}</h2>
      <p>{miP}</p>
        </ItemTexts>
        

        
        <ItemTexts>
        <h2>{mphH}</h2>
      <p>{mphP}</p>
        </ItemTexts>
        

        
        <ItemTexts>
        <h2>{milH}</h2>
      <p>{milP}</p>
        </ItemTexts>
        
        
        <ItemTexts>
        <h2>{hpH}</h2>
      <p>{hpP}</p>
        </ItemTexts>
        
        <RightButton> {rightBtnText}</RightButton>
      </ButtonGroup>
      </Fade>
      
    </Wrap>
  );
}

const Wrap = styledComponents.div`
     z-index: 10;
     width: 100vw;
     height: 100vh;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-image: url('/images/model-s.jpg');
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styledComponents.div`
  padding-top: 15vh;
  text-align: center;
`
const ItemTexts = styledComponents.div`
margin-left: 100px;
h2 {
  color: white;
  font-size: 2rem;
 }
 p{
  color: white;
  font-size: 0.90rem;
  margin-top:5px;
 }
`
const ButtonGroup = styledComponents.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
  
 
  


  @media (max-width: 768px){
    flex-direction: column;
  }

`
const LeftButton = styledComponents.div`
    background-color: rgba(23, 26 ,32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: solid 3px white;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    margin-left: 80px;

`
const RightButton = styledComponents(LeftButton)`

   

`


export default About

