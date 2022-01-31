import {
  Github,
  Instagram,
  LinkedinSquare,
  Spotify,
} from "@styled-icons/boxicons-logos"
import { Envelope } from "@styled-icons/boxicons-regular"
import React from "react"
import { HoverIcon } from "./hoverIcons"

export const LinkedInIcon = () => {
  return (
    <HoverIcon
      color="#0077b5"
      href="https://www.linkedin.com/in/eliehymowitz/"
      target="_blank"
      rel="noopener"
    >
      <LinkedinSquare />
    </HoverIcon>
  )
}

export const GitHubIcon = () => {
  return (
    <HoverIcon
      color="#333"
      href="https://github.com/ehymowitz"
      target="_blank"
      rel="noopener"
    >
      <Github />
    </HoverIcon>
  )
}

export const InstagramIcon = () => {
  return (
    <HoverIcon
      color="#c32aa3"
      href="https://www.instagram.com/elie.s.h/"
      target="_blank"
      rel="noopener"
    >
      <Instagram />
    </HoverIcon>
  )
}

export const SpotifyIcon = () => {
  return (
    <HoverIcon
      color="#84bd00"
      href="https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA"
      target="_blank"
      rel="noopener"
    >
      <Spotify />
    </HoverIcon>
  )
}

export const EmailIcon = () => {
  return (
    <HoverIcon
      color="#ff9800"
      href="mailto:ehymowitz@gmail.com"
      target="_blank"
      rel="noopener"
    >
      <Envelope />
    </HoverIcon>
  )
}
