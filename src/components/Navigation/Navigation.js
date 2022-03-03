import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.ul`
  padding: 0;
  list-style: none;
  color: white;
  font-weight: 700;
  display: flex;
`

const NavItem = styled.li`
  margin-right: 10px;

  ::after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    width: 2px;
    background: white;
  }

  :last-child::after {
    display: none;
  }
`

const Navigation = () => (
  <NavigationWrapper>
    <NavItem>wfefwedew</NavItem>
    <NavItem>wedcwcwe</NavItem>
    <NavItem>cewcwehhgf</NavItem>
  </NavigationWrapper>
)

export default Navigation
