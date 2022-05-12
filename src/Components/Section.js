import React from "react";
import styledComponents from "styled-components";
import Fade from 'react-reveal/Fade';




function Section({title, descripition, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{descripition}</p>
      </ItemText>
        </Fade>
        
      <Buttons>
      <ButtonGroup>
      <Fade left> 
        <LeftButton>{leftBtnText}</LeftButton>
      </Fade>
      <Fade right>

        {rightBtnText && 
        <RightButton> {rightBtnText}</RightButton>
      }
      </Fade>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
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
const ButtonGroup = styledComponents.div`
  display: flex;
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
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`
const RightButton = styledComponents(LeftButton)`
   background: white;
   opacity: 0.65;
   color: black;

`
const DownArrow = styledComponents.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styledComponents.div``
export default Section;
