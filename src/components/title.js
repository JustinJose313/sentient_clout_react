import React from "react"
import styled from "styled-components/macro"

const Title = ({ children }) => {
  return <TitleComp>{children}</TitleComp>
}

export default Title

const TitleComp = styled.h2`
padding: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  letter-spacing: 3px;
  color: #777;
`
