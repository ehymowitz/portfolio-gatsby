import React from "react"
import useScroll from "../../hooks/useScroll"
import { StyledNav } from "./nav.styled"

const Nav = () => {
  const { direction, position } = useScroll()

  return (
    <StyledNav hide={direction < 0 && position > 200} position="top">
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
