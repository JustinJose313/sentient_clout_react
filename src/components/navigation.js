import React from "react"
import { motion } from "framer-motion"
import { NavWrapper, Logo, Menu, MenuBtn } from "../styles/navigationStyles"
import Link from "gatsby-link"
import logo from "../logo.svg"


const Navigation = ({toggleMenu, setToggleMenu}) => {
  const ease = [0.6, 0.05, -0.01, 0.9]
  return (
    <>
      <NavWrapper
        initial={{ width: 0 }}
        animate={{ width: 1200 }}
        transition={{
          duration: 1,
          ease: ease,
        }}
      >
        <Logo
          initial={{ width: 0 }}
          animate={{ width: 230 }}
          transition={{
            duration: 1,
            ease: ease,
          }}
        >
          <motion.img
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1,
              ease: ease,
            }}
            src={logo}
            alt=""
          />
        </Logo>
        <Menu
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
          }}
        >
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>Projects</Link>
          <Link>Contact us</Link>
        </Menu>
      </NavWrapper>
      <MenuBtn onClick={() => setToggleMenu(toggleMenu => !toggleMenu)}>
        <button>
          <span></span>
          <span></span>
        </button>
      </MenuBtn>
    </>
  )
}

export default Navigation
