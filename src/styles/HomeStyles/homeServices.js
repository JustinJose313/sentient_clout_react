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
  width: 100%;
`

export const CardWide = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: black;
  border-radius: 30px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 880px) {
    width: 100%;
  }
  .cardImgWrap {
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    img {
      transition: 0.3s;
      width: 100%;
    }
    video {
      transition: 0.3s;
      width: 100%;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
      video {
        transform: scale(1.1);
      }
    }
  }
  .cardContentWrap {
    padding: 30px 30px 50px;
    color: white;
    @media (max-width: 600px) {
      padding: 10px 20px 30px;
    }
    h4 {
      font-size: 50px;
      font-weight: 600;
      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
  }
`

export const CardFlex = styled(motion.div)`
  margin: 100px auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  transition: 0.3s;
  .cardSmall {
    width: 450px;
    margin: 10px;
    background-color: black;
    border-radius: 30px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
    }
    .cardImgWrap {
      width: 100%;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.2) inset;
      -webkit-box-shadow: 0 0 50px rgba(0, 0, 0, 0.2) inset;
      img {
        transition: 0.3s;
        width: 100%;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .cardContentWrap {
      padding: 30px 30px 50px;
      color: white;
      @media (max-width: 600px) {
        padding: 10px 20px 30px;
      }
      h4 {
        font-size: 50px;
        font-weight: 600;
        @media (max-width: 600px) {
          font-size: 30px;
        }
      }
    }
  }
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    .cardSmall {
      width: 100%;
      &:last-child {
        margin: 100px 10px 10px 10px;
      }
    }
  }
`
