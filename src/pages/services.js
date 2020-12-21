import React from "react"
import HomeLayout from "../layouts/homeLayout"
//comp
import Hero from './../components/hero'
//styles
import { createGlobalStyle } from "styled-components"
import { GlobalStyles } from "."
import service from './../assets/images/img.jpg';

const Services = () => {
    console.log(service)
    return (
        <>
  <GlobalStyles />
    <HomeLayout>
      <Hero title='services' bg={service}/>
    </HomeLayout>
  </>
    )
}

export default Services;
