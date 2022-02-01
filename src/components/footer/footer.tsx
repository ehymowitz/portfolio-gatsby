import React from "react"
import useScroll from "../../hooks/useScroll"
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
} from "../hoverIcons/linkIcons"
import { StyledFooter } from "./footer.styled"

const Footer = () => {
  const { direction } = useScroll()

  return (
    <StyledFooter hide={direction < 0} position="bottom">
      <a href="../../../Elie Hymowitz_CV.pdf" target="_blank">
        CV
      </a>
      <div>
        <InstagramIcon />
        <SpotifyIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
      </div>
    </StyledFooter>
  )
}

export default Footer
