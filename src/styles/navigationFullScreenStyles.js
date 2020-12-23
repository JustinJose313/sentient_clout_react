import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  background-color: ${props => props.theme.background};
  color: black;
  z-index: 100;
  overflow: hidden;
`
export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    font-weight: 900;
    letter-spacing: 1px;

    @media (max-width: 770px) {
      font-size: 15px;
    }
  }
`

export const CloseBtn = styled.div`
  button {
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    cursor: pointer;

    img {
      width: 30px;
      &:hover {
        transform: scale(1.1);
      }
      @media (max-width: 770px) {
        width: 15px;
      }
    }
  }
`

export const Group = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`

export const NavList = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      a {
        text-decoration: none;
        font-weight: 900;
        user-select: none;
        color: ${props => props.theme.text};
      }
      &:hover a {
        color: ${props => props.theme.primary};
      }

      @media (max-width: 770px) {
        font-size: 2rem;
  }
    }
  }
  @media (max-width: 770px) {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`

export const NavSocials = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  h3 {
    display: block;
    font-weight: bold;
    margin-bottom: 50px;
    font-size: 25px;
  }
  .social-icons {
    a {
      display: block;
      height: 40px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.primary};
      }
    }
  }
  @media (max-width: 770px) {
    display: none;
  }
`
