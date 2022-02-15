import * as React from "react"
import { Link } from "gatsby"

import styled, {createGlobalStyle} from "styled-components"

const StyledWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: red;
`

const IndexPage = () => (
<StyledWrapper>
<h1>Hi people</h1>
</StyledWrapper>
)

export default IndexPage
