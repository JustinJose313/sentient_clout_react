import React from "react"
import HomeLayout from "../layouts/homeLayout"
//comp
import Hero from './../components/hero'
//styles
import { createGlobalStyle } from "styled-components"
import { GlobalStyles } from "."
import contact from './../assets/images/contact_us.jpeg';

const ContactUS = () => {
    console.log(contact)
    return (
        <>
  <GlobalStyles />
    <HomeLayout>
      <Hero title='Contact Us' bg={contact}/>
    </HomeLayout>
  </>
    )
}

export default ContactUS;
