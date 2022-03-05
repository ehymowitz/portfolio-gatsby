import React from "react"
import upcomingShows from "../../media/top/upcomingShows"
import { StyledTop, StyledUpcomingShows } from "./top.styled"

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
            <h3>{upcomingShow.date}</h3>
            <p>
              {upcomingShow.location} w/ {upcomingShow.band}
            </p>
          </div>
        ))}
      </StyledUpcomingShows>
    </StyledTop>
  )
}

export default Top
