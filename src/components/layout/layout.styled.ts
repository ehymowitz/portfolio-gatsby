import styled, { createGlobalStyle, css } from "styled-components"
import "@fontsource/commissioner" // Defaults to weight 400.
import "@fontsource/fraunces" // Defaults to weight 400.

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Commissioner";
    background-color: lightgrey;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: "Fraunces";
  }

  a {
    color: black;
    text-decoration: none;
  }
`

export const StyledLayout = styled.div``

interface HideOnScrollProps {
  hide: boolean
  position: "top" | "bottom"
}

export const HideOnScroll = styled.div<HideOnScrollProps>`
  transition: all 0.5s ease;
  display: flex;
  position: fixed;
  width: 89%;

  ${props =>
    props.position === "top" &&
    css`
      top: ${props.hide ? `-5em` : `2em`};
    `}

  ${props =>
    props.position === "bottom" &&
    css`
      bottom: ${props.hide ? `-5em` : `2em`};
    `}
`
