import React from "react"
import styled from "styled-components/macro"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { BiCopyright } from "react-icons/bi"

const Footer = () => {
  return (
    <footer>
      <Wrap>
        <h1>SENTIENT CLOUT.</h1>
        <div className="linkWrap">
          <a href="facebook.com">
            <FaFacebookF />
          </a>
          <a href="facebook.com">
            <FaInstagram />
          </a>
          <a href="facebook.com">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="copyright">
          <p>
            <BiCopyright /> Copyright {new Date().getFullYear()}. Sentient
            Clout.
          </p>
        </div>
      </Wrap>
    </footer>
  )
}

export default Footer

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  h1 {
    font-weight: 800;
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: center;
  }
  .linkWrap {
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin: 0 5px;
      color: #218c74;
      font-size: 30px;
      transition: 0.2s ease-in-out;
      &:hover {
        color: black;
        transform: scale(1.05);
      }
    }
  }
  .copyright {
    margin-bottom: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222;
    svg {
        fill: #222;
      vertical-align: middle;
      display: inline-block;
    }
  }
`
