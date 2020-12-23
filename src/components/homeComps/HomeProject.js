import React from "react"
import styled from "styled-components/macro"
import { Parallax } from "react-parallax"
import monochrome from "./../../assets/images/monochrome.jpg"
const HomeProject = () => {
  return (
    <Parallax bgImage={monochrome} strength={-250}>
      <Wrap>
        <div className="big-text">
          <h1>We create projects</h1>
          <h1>
            that <span>Inspire.</span>
          </h1>

          <p></p>
        </div>
        <div className="small-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            debitis pariatur similique, accusantium repellat error numquam rerum
            quas quibusdam dicta.
          </p>
        </div>
      </Wrap>
    </Parallax>
  )
}

export default HomeProject

const Wrap = styled.div`
  position: relative;
  height: 100vh;
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

  .big-text {
    position: absolute;
    top: 20%;
    padding: 30px;
    h1 {
      font-size: 66px;
      font-weight: 800;
      color: #24372c;
      span {
        mix-blend-mode: difference;
        font-size: 66px;
        font-weight: 800;
        color: white;
      }
    }
    @media (max-width: 770px) {
      top: 10%;
      padding: 20px;
    h1 {
      font-size: 40px;
    }
  }
  }
  .small-text {
    position: absolute;
    bottom: 20%;
    right: 0;
    p {
      width: 40ch;
      color: white;
      line-height: 2;
    }
  @media (max-width: 770px) {
    background: linear-gradient(
    to top,
    black, 
    transparent
  );
    bottom: 0;
    right: 0;
    width:100%;
    padding: 10px 10px 70px 10px;
    display: flex;
    justify-content: flex-end;
    p {
      width: 30ch;
      text-align: right;
    }
  }
  } 
`
