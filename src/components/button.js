import React from "react"
import styled from "styled-components/macro"
import Link from "gatsby-link"

const Button = ({ children }) => {
  return (
    <Btn>
      <span>{children}</span>
      <span>{children}</span>
    </Btn>
  )
}

export default Button

const Btn = styled(Link)`
  display: inline-block;
  font-size: 1rem;
  margin-top: 2rem;
  padding: 12px 30px;
  transition: color 0.3s ease-in-out;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.primary};
  cursor: pointer;

  span {
      font-weight: bold;
    &:first-child {
        color: #fff;
      position: relative;
      transition: color 0.5s cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 5;
    }
    &:last-child {
      color: #fff;
      display: block;
      position: absolute;
      bottom: 0;
      z-index: 10;
      top: 50%;
      height: 14px;
      line-height: 13px;
      opacity: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 103%;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.48, 0, 0.12, 1),
      -webkit-transform 0.5s cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(0);
    z-index: 9;
    background-color: black;
  }
  &:hover::after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
  }
  &:hover span:last-child {
    transform: translateY(-50%);
    opacity: 1;
    transition: all 0.8s cubic-bezier(0.48, 0, 0.12, 1);
  }
`
