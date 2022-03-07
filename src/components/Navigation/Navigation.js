import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.ul`
  padding: 0;
  list-style: none;
  color: #1b201f;
  font-weight: 700;
  display: flex;
`

const NavItem = styled.li`
  margin-right: 10px;

  ::after {
    position: absolute;
    content: "";
    display: block;
    width: 2px;
    background: white;
  }

  :last-child::after {
    display: none;
  }
`

const Navigation = () => (
  <NavigationWrapper>
    <NavItem>Technology stack</NavItem>
    <NavItem>My projects</NavItem>
    <NavItem>About me</NavItem>
  </NavigationWrapper>
)

export default Navigation
