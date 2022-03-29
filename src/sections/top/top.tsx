import React from "react"
import upcomingShows from "../../media/top/upcomingShows"
import {
  StyledTop,
  StyledUpcomingShows,
  UpcomingShowHolder,
} from "./top.styled"

const Top = () => {
  return (
    <StyledTop id="me">
      <div>
        <h1>Hi, I'm Elie</h1>
        <h2>I'm a web developer. I also play music</h2>
        <h2>Born in Seattle, living in Montreal</h2>
      </div>
      <StyledUpcomingShows>
        <h2>Upcoming Shows</h2>
        {upcomingShows.map(upcomingShow => (
          <div key={upcomingShow.date}>
            <UpcomingShowHolder
              href={upcomingShow.link}
              target="_blank"
              rel="noopener"
              linkAvailable={!!upcomingShow.link}
            >
              <h3>{upcomingShow.date}</h3>
              <p>
                {upcomingShow.location} w/ {upcomingShow.band}
              </p>
            </UpcomingShowHolder>
          </div>
        ))}
      </StyledUpcomingShows>
    </StyledTop>
  )
}

export default Top
