interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "October 4th",
    location: "Brasserie Beaubien",
    band: "Passionate Rascal & Yung Kung Ra",
  },
  { date: "October 6th", band: "YZABO", location: "Honey Martin" },
  {
    date: "October 15th",
    band: "Super Sandwich",
    location: "Le Basement ",
  },
  {
    date: "October 20th",
    band: "YZABO",
    location: "Honey Martin",
  },
  {
    date: "October 29th",
    band: "YZABO",
    location: "WolfLab",
  },
]

export default UpcomingShows
