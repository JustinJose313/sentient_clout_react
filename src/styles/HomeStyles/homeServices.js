import styled from "styled-components/macro"
import { motion } from "framer-motion"

export const Section = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`
export const ServiceHeader = styled(motion.div)`
  margin: 0 auto;
  h1 {
    font-weight: 900;
    font-size: 66px;
    line-height: 76px;
    letter-spacing: -1.61px;
    color: ${props => props.theme.text};
    margin-bottom: 60px;
    text-transform: capitalize;
  }
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.5px;
    margin-bottom: 120px;
    color: ${props => props.theme.text};
    max-width: 50ch;
  }
`

export const CardWrap = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
  @media (max-width: 500px) {
    grid-gap: 10px;
  }
`

export const Card = styled.div`
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .card-img {
    width: 100%;
    height: 224px;
    overflow: hidden;
    border-radius: 10px;
    object-fit: cover;

    img {
      width: 100%;
      transform: scale(1.1);
      height: 120%;
    }
    video {
      width: 100%;
    }
  }

  .card-content {
    h4 {
      font-weight: 700;
      font-size: 40px;
      line-height: 1.15;
      margin-top: 10px;
      margin-bottom: 5px;
      letter-spacing: -0.8px;
      color: ${props => props.theme.text};
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: -0.42px;
      line-height: 1.2;
      color: ${props => props.theme.text};
      margin-bottom: 100px;
      
      
    }
  }
  &:last-child .card-content > p{
        margin-bottom: 0;
      }
  &:hover .card-content > h4 {
    color: ${props => props.theme.primary};
  }

  @media (max-width: 1000px) {
    grid-column-end: span 6;
  }
  @media (max-width: 700px) {
    grid-column-end: span 12;
  }
  
`
