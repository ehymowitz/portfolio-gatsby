import React from "react"
import { StyledFooter } from "./footer.styled"
import {
  LinkedinSquare,
  Github,
  Instagram,
  Spotify,
} from "@styled-icons/boxicons-logos"
import { Envelope } from "@styled-icons/boxicons-regular"
const Footer = () => {
  return (
    <StyledFooter>
      <a href="../../../Elie Hymowitz_CV.pdf" target="_blank">
        CV
      </a>
      <div>
        <a
          href="https://www.linkedin.com/in/eliehymowitz/"
          target="_blank"
          rel="noopener"
        >
          <LinkedinSquare />
        </a>
        <a href="https://github.com/ehymowitz" target="_blank" rel="noopener">
          <Github />
        </a>
        <a
          href="https://www.instagram.com/elie.s.h/"
          target="_blank"
          rel="noopener"
        >
          <Instagram />
        </a>
        <a
          href="https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA"
          target="_blank"
          rel="noopener"
        >
          <Spotify />
        </a>
        <a href="mailto:ehymowitz@gmail.com" target="_blank" rel="noopener">
          <Envelope />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
