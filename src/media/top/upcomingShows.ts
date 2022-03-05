interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  { date: "March 10th", location: "Blue Dog", band: "Zach Winter" },
  { date: "March 14th", location: "TurboHaus", band: "1000 Joules" },
  {
    date: "March 16th-28th",
    location: "BC Tour",
    band: "Apples",
  },
]

export default UpcomingShows
