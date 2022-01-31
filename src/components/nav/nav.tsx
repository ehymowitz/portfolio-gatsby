import React from "react"
import { StyledNav } from "./nav.styled"

const Nav = () => {
  return (
    <StyledNav>
      <h2>EH</h2>
      <ul>
        <a href="#me">Me</a>
        <a>|</a>
        <a href="#music">Music</a>
        <a>|</a>
        <a href="#code">Code</a>
      </ul>
    </StyledNav>
  )
}

export default Nav
