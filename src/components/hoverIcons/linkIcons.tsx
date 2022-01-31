import {
  Github,
  Instagram,
  LinkedinSquare,
  Sass,
  Spotify,
} from "@styled-icons/boxicons-logos"
import { Envelope } from "@styled-icons/boxicons-regular"
import {
  Gatsby,
  Mongodb,
  Netlify,
  Nextdotjs,
  Styledcomponents,
  Vercel,
} from "@styled-icons/simple-icons"
import React from "react"
import { HoverIcon } from "./hoverIcons"

export const LinkedInIcon = () => (
  <HoverIcon
    color="#0077b5"
    href="https://www.linkedin.com/in/eliehymowitz/"
    target="_blank"
    rel="noopener"
  >
    <LinkedinSquare />
  </HoverIcon>
)

export const GitHubIcon = () => (
  <HoverIcon
    color="#333"
    href="https://github.com/ehymowitz"
    target="_blank"
    rel="noopener"
  >
    <Github />
  </HoverIcon>
)

export const InstagramIcon = () => (
  <HoverIcon
    color="#c32aa3"
    href="https://www.instagram.com/elie.s.h/"
    target="_blank"
    rel="noopener"
  >
    <Instagram />
  </HoverIcon>
)

export const SpotifyIcon = () => (
  <HoverIcon
    color="#84bd00"
    href="https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA"
    target="_blank"
    rel="noopener"
  >
    <Spotify />
  </HoverIcon>
)

export const EmailIcon = () => (
  <HoverIcon
    color="#ff9800"
    href="mailto:ehymowitz@gmail.com"
    target="_blank"
    rel="noopener"
  >
    <Envelope />
  </HoverIcon>
)

export const GatsbyIcon = () => (
  <HoverIcon color="#362066">
    <Gatsby />
  </HoverIcon>
)

export const StyledComponentsIcon = () => (
  <HoverIcon color="#F6D458">
    <Styledcomponents />
  </HoverIcon>
)

export const NetlifyIcon = () => (
  <HoverIcon color="#00AD9F">
    <Netlify />
  </HoverIcon>
)

export const NextJSIcon = () => (
  <HoverIcon color="#000">
    <Nextdotjs />
  </HoverIcon>
)

export const MongoIcon = () => (
  <HoverIcon color="#4DB33D">
    <Mongodb />
  </HoverIcon>
)

export const SassIcon = () => (
  <HoverIcon color="#c69">
    <Sass />
  </HoverIcon>
)

export const VercelIcon = () => (
  <HoverIcon color="#000">
    <Vercel />
  </HoverIcon>
)
