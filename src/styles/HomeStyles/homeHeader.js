import styled from "styled-components/macro"
import Background from "gatsby-background-image"

export const Hero = styled(Background)`
  height: 100vh;
  width: 100%;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 150px;
      color: ${props => props.theme.text};
      font-weight: 900;
      font-size: 66px;
      span {
        font-weight: 900;
        color: ${props => props.theme.primary};
      }

      @media (max-width: 607px) {
        padding: 0 10px;
        text-align: center;
        font-size: 30px;
      }
      @media (max-width: 360px) {
        font-size: 20px;
        padding: 0 10px;
        text-align: center;
      }
    }
  }
`
