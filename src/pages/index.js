import React from "react"
import HomeLayout from "../layouts/homeLayout"
//styles
import { createGlobalStyle } from "styled-components"
//css
import './../styles/locomotive.css'
import HomeHeader from "../components/homeComps/HomeHeader"
import HomeServices from "../components/homeComps/HomeServices"
import HomeProject from "../components/homeComps/HomeProject"



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
  height: 100%;
  width: 100%;
  background-color: #f9f8fd;
  overscroll-behavior-y: none;
  overflow-y: scroll;
}
#___gatsby > * {
  height: 100%;
}
`


export default function Home() {
  return <>
  <GlobalStyles />
    <HomeLayout>
      <HomeHeader />
      <HomeServices />
      <HomeProject />
    </HomeLayout>
  </>
  
}
