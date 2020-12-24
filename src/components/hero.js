import React, { useEffect } from "react"
import gsap, { Bounce } from "gsap"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const Hero = ({ title, bg }) => {
  console.log(bg)
  const styles = {
    backgroundImage: `url(${bg})`,
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <div>
        <StyledHero
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
          
          className="overlay"
          style={styles}
        >
          <Wrap>
            <div className="title">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                exit={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
              >
                <span>{title}</span>
              </motion.h1>
            </div>
          </Wrap>
        </StyledHero>
      </div>
    </AnimatePresence>
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
  width: 100vw;
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
