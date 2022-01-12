import {
  faLinkedin,
  faGithub,
  faSpotify,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { StyledFooter } from "./footer.styled"

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
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ehymowitz" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/elie.s.h/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="mailto:ehymowitz@gmail.com" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
