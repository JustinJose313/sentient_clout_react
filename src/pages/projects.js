import React from "react"
import HomeLayout from "../layouts/homeLayout"
//comp
import Hero from './../components/hero'
//styles
import { createGlobalStyle } from "styled-components"
import { GlobalStyles } from "."
import project from './../assets/images/img.jpg';

const Projects = () => {
    console.log(project)
    return (
        <>
  <GlobalStyles />
    <HomeLayout>
      <Hero title='Projects' bg={project}/>
    </HomeLayout>
  </>
    )
}

export default Projects;
