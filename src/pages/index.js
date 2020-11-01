import React from "react"
import HomeLayout from "../layouts/homeLayout"
//styles
import { createGlobalStyle } from "styled-components"
import HomeHeader from "../components/homeComps/HomeHeader"
import HomeServices from "../components/homeComps/HomeServices"

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
}

body {
  height: 100vh;
  width: 100%;
  background-color: #f9f8fd;
}
`
export default function Home() {
  return <>
  <GlobalStyles />
    <HomeLayout>
      <HomeHeader />
      <HomeServices />
    </HomeLayout>
  </>
  
}
