interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "April 13th",
    location: "Club Balattou",
    band: "Jace Carrillo",
    link: "https://fb.me/e/2uzabPaeU",
  },
  { date: "April 23rd", location: "Blue Dog", band: "Zach Winter" },
]

export default UpcomingShows
