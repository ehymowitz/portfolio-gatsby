interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "September 2nd",
    location: "Freakfest",
    band: "Mort Vulcan",
  },
  { date: "September 8th", band: "YZABO", location: "Honey Martin" },
  {
    date: "September 11th",
    band: "YZABO",
    location: "l'Escogriffe Bar Spectacle",
  },
  {
    date: "September 16th",
    band: "YZABO",
    location: "The Diving Bell Social Club",
  },
  { date: "September 22nd", band: "YZABO", location: "Honey Martin" },
  {
    date: "September 28th",
    location: "TBD",
    band: "Laroie",
  },
  {
    date: "September 29th",
    band: "YZABO",
    location: "Blug Dog",
  },
]

export default UpcomingShows
