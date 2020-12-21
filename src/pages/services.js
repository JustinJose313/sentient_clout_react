import React from "react"
import HomeLayout from "../layouts/homeLayout"
//styles
import { createGlobalStyle } from "styled-components"
import { GlobalStyles } from "."

const Services = () => {
    return (
        <>
  <GlobalStyles />
    <HomeLayout>
      <h1>Services</h1>
    </HomeLayout>
  </>
    )
}

export default Services
