import * as React from "react"
import { Link } from "gatsby"
import Navigation from "../components/Navigation/Navigation"
import backgroundImage from "../images/background-image.jpg"
import Header from "../components/Header/Header"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: right 60%;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Header>Hello, I'm Kornelia</Header>
      <Navigation />
    </StyledWrapper>
  </>
)

export default IndexPage
