import React from "react"
import styled from "styled-components/macro"
import { Parallax } from "react-parallax"
import monochrome from "./../../assets/images/monochrome.jpg"
const HomeProject = () => {
  return (
    <Parallax bgImage={monochrome} strength={500}>
      <Overlay>
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
              debitis pariatur similique, accusantium repellat error numquam
              rerum quas quibusdam dicta.
            </p>
          </div>
        </Wrap>
      </Overlay>
    </Parallax>
  )
}

export default HomeProject

const Overlay = styled.div`

background: linear-gradient(to bottom, transparent, black);
`

const Wrap = styled.div`
  position: relative;
  min-height: 70vh;
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
    padding: 30px;
    margin-top: 100px;
    h1 {
      font-size: 66px;
      font-weight: 800;
      mix-blend-mode: difference;
      color: white;
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
    padding: 40px;
    p {
      width: 40ch;
      color: white;
      line-height: 2;
    }
  }
`
