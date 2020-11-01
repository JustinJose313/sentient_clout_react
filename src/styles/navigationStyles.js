import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const NavWrapper = styled(motion.div)`
  position: absolute;
  width: 1200px;
  height: 90px;
  display: flex;
  top: 0;
  left: 0;
  z-index: 99;

  @media (max-width: 1210px) {
    display: none;
  }
`

export const Logo = styled(motion.div)`
  font-size: 15px;
  background: black;
  color: white;
  width: 230px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100%;
    path {
      fill: white;
    }
  }
`

export const Menu = styled(motion.div)`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    font-weight: 600;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }

  
`

export const MenuBtn = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 2.2rem;
  z-index: 99;
  button {
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      display: block;
      width: 30px;
      height: 5px;
      background-color: black;
      margin-bottom: 5px;
      z-index: 99;
      transition: all 0.2s ease-in-out;

      &:last-child {
        width: 20px;
      }
    }
    &:hover span{
      &:last-child {
        width: 30px;
      }
    }
  }
`
