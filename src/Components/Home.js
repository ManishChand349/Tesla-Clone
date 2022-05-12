import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (     
    <Container>
         <Section
         title="Model S"
         descripition="Order Online for Touchless Delivery"
         backgroundImg="model-s.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing invertory"
         />
         <Section
         title="Model Y"
         backgroundImg="model-y.jpg"
         descripition="Order Online for Touchless Delivery"
         leftBtnText="Custom order"
         rightBtnText="Existing invertory"
         />
         <Section
         title="Model 3"
         backgroundImg="model-3.jpg"
         descripition="Order Online for Touchless Delivery"
         leftBtnText="Custom order"
         rightBtnText="Existing invertory"
         />
         <Section
         title="Model X"
         backgroundImg="model-X.jpg"
         descripition="Order Online for Touchless Delivery"
         leftBtnText="Custom order"
         rightBtnText="Existing invertory"
         />
         <Section
         title="Lowest Cost Solar Panels in America"
         descripition="Money-back guarantee"
         backgroundImg="solar-panel.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
         />
         <Section
         title="Solar for New Roofs"
         descripition="Solar Roof Costs less Than a New Roof Plus Solar Panels "
         backgroundImg="solar-roof.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
         />
         <Section
         title="Accessories"
         descripition=""
         backgroundImg="accessories.jpg"
         leftBtnText="Order now"
      
         />
         
     </Container>
  )
}

const Container =styled.div`
     height: 100vh;


`
export default Home
