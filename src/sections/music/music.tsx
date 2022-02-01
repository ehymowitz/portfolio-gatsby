import React from "react"
import musicProjects from "../../media/music"
import { MusicContainer, MusicList, StyledMusic } from "./music.styled"
import {
  InstagramIcon,
  SpotifyIcon,
} from "../../components/hoverIcons/linkIcons"
import { SmallText, TitleText } from "../../components/section/section.styled"

const Music = () => {
  return (
    <StyledMusic id="music">
      <div>
        <TitleText>
          <h1>Music Videos I'm In</h1>
          <div>
            <InstagramIcon />
            <a
              href="https://www.instagram.com/elie.s.h/"
              target="_blank"
              rel="noopener"
            >
              <SmallText>For more of what I'm up to</SmallText>
            </a>
            <SpotifyIcon />
            <a
              href="https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA"
              target="_blank"
              rel="noopener"
            >
              <SmallText>For more songs I've played on</SmallText>
            </a>
          </div>
        </TitleText>
        <MusicList>
          {musicProjects.map(project => (
            <MusicContainer key={project.link}>
              <iframe
                src={project.link}
                frameBorder="0"
                title={project.title}
              ></iframe>
              <h3>{project.band}</h3>
              <p>{project.title}</p>
            </MusicContainer>
          ))}
        </MusicList>
      </div>
    </StyledMusic>
  )
}

export default Music
