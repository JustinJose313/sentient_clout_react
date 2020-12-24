import React, { useEffect } from "react"
import { useLocation } from '@reach/router';
import styled from "styled-components/macro"
import { motion, AnimatePresence } from "framer-motion"

const Hero = ({ title, bg }) => {
    const ease = [0.6, 0.05, -0.01, 0.9]
    const location = useLocation()
  
  const styles = {
    backgroundImage: `url(${bg})`,
  }
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <StyledHero
        key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: ease,
          }}
          className="overlay"
          style={styles}
        >
          <Wrap>
            <div className="title">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                  ease: ease,
                }}
              >
                <span>{title}</span>
              </motion.h1>
            </div>
          </Wrap>
        </StyledHero>
      </AnimatePresence>
    </div>
  )
}

const StyledHero = styled(motion.div)`
  margin-top: 0px;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    mix-blend-mode: difference;
  }
  span {
    color: white;
    mix-blend-mode: difference;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 80px;
    font-family: "Montserrat", sans-serif;
    @media (max-width: 700px) {
      font-size: 40px;
    }
  }
`

export default Hero
