interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "August 12th",
    location: "Diving Bell Social Club",
    band: "Cinzia & The Eclipse",
  },
  { date: "August 20th", band: "Letchi", location: "Diving Bell Social Club",
  },
  {
    date: "August 25th",
    band: "YZABO",
    location: "Honey Martin",
  },
]

export default UpcomingShows
