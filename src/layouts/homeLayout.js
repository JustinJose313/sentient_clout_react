import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import Navigation from "../components/navigation"
import NavigationFullScreen from "../components/navigationFullScreen"

const HomeLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const theme = {
      text: '#3c4046',
      background: '#f9f8fd',
      primary: '#0c9869'

  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <NavigationFullScreen
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        {children}
      </div>
    </ThemeProvider>
  )
}

export default HomeLayout
