import React from "react"
import HomeLayout from "../layouts/homeLayout"
//comp
import Hero from './../components/hero'
//styles
import { createGlobalStyle } from "styled-components"
import { GlobalStyles } from "."
import drink from './../assets/images/drinkHero.jpg';

const Services = () => {
    console.log(drink)
    return (
        <>
  <GlobalStyles />
    <HomeLayout>
      <Hero title='services' bg={drink}/>
    </HomeLayout>
  </>
    )
}

export default Services
