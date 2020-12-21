import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Navigation from "../components/navigation"
import NavigationFullScreen from "../components/navigationFullScreen"

import LocomotiveScroll from "locomotive-scroll"

const HomeLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const theme = {
    text: "#3c4046",
    background: "#f9f8fd",
    primary: "#0c9869",
  }
  useEffect(() => {
    setTimeout(function () {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      })
    }, 1000)
    
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div data-scroll-container className="scroll">
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <NavigationFullScreen
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        {/* <div ref={app} className="App">
          <div ref={scrollContainer} className="scroll">
            {children}
          </div>
        </div> */}
        {children}
      </div>
    </ThemeProvider>
  )
}

export default HomeLayout
