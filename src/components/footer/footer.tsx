import React from "react"
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
} from "../elements/linkIcons"
import { StyledFooter } from "./footer.styled"
const Footer = () => {
  return (
    <StyledFooter>
      <a href="../../../Elie Hymowitz_CV.pdf" target="_blank">
        CV
      </a>
      <div>
        <LinkedInIcon />
        <GitHubIcon />
        <InstagramIcon />
        <SpotifyIcon />
        <EmailIcon />
      </div>
    </StyledFooter>
  )
}

export default Footer
