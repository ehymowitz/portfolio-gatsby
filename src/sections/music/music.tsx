import React from "react"
import musicProjects from "../../media/music"
import {
  MusicContainer,
  MusicList,
  MusicTitleText,
  StyledMusic,
} from "./music.styled"
import {
  InstagramIcon,
  SpotifyIcon,
} from "../../components/hoverIcons/linkIcons"

const Music = () => {
  return (
    <StyledMusic id="music">
      <div>
        <MusicTitleText>
          <h2>Music Videos I'm In</h2>
          <div>
            <a
              href="https://www.instagram.com/elie.s.h/"
              target="_blank"
              rel="noopener"
            >
              <p>
                <InstagramIcon />
                For more of what I'm up to
              </p>
            </a>
            <a
              href="https://open.spotify.com/playlist/2ieh5fIUHEdPw5dnwS2wcp?si=Q7GnR3flREOSEcb3ME6HzA"
              target="_blank"
              rel="noopener"
            >
              <p>
                <SpotifyIcon /> For more songs I've played on
              </p>
            </a>
          </div>
        </MusicTitleText>
        <MusicList>
          {musicProjects.map(project => (
            <MusicContainer>
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
