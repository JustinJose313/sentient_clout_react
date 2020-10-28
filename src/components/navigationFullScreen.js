import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "gatsby-link"
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  CloseBtn,
  NavList,
  Group,
  NavSocials,
} from "../styles/navigationFullScreenStyles"
import closeSVG from "../assets/svg/close.svg"
const NavigationFullScreen = ({ toggleMenu, setToggleMenu }) => {
  const navLinks = [
    {
      id: 0,
      link: "HOME",
      path: "/",
    },
    {
      id: 1,
      link: "SERVICES",
      path: "/services",
    },
    {
      id: 2,
      link: "PROJECTS",
      path: "/projects",
    },
    {
      id: 3,
      link: "CONTACT US",
      path: "/contsct-us",
    },
  ]
  const navSocials = [
    {
      id: 0,
      link: "Facebook",
    },
    {
      id: 1,
      link: "Twitter",
    },
    {
      id: 2,
      link: "Instagram",
    },
    {
      id: 3,
      link: "Linked In",
    },
  ]

  const parent = {
    initial: { y: 800 },
    exit: { y: 800 },
    animate: { y: 0, transition: { staggerChildren: 0.2 } },
  }

  const child = {
    initial: { y: 800 },
    exit: { y: 800 },
    animate: {
      y: 0,
      transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  }

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween>
                  <h2>SENTIENT CLOUT.</h2>
                  <CloseBtn
                    onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}
                  >
                    <button>
                      <img src={closeSVG} alt="" />
                    </button>
                  </CloseBtn>
                </Flex>
              </NavHeader>
              <Group>
              <NavList>
                <motion.ul variants={parent} initial='initial' animate='animate'>
                  {navLinks.map(link => (
                    <motion.li
                    variants={child}
                    key={link.id}
                    >
                      <Link to={link.path}>{link.link}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </NavList>
              <NavSocials>
                    <div className="social-icons">
                    <h3>Socials</h3>
                    {navSocials.map(social => (
                      <Link
                      >{social.link}</Link>
                    ))}
                    </div>
              </NavSocials>
              </Group>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavigationFullScreen
