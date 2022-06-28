interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "July 8th",
    location: "Festival International de Jazz de Montréal",
    band: "Laroie",
    link: "https://fb.me/e/2jdqDuBzM",
  },
  { date: "July 14th", band: "YZABO", location: "Honey Martin" },
  {
    date: "July 16th",
    location: "Chinatown Night Market",
    band: "YZABO",
  },
  {
    date: "July 28th",
    band: "YZABO",
    location: "Honey Martin",
  },
  {
    date: "July 30th",
    location: "Sweet Soul Saturday (Montreal Improv)",
    band: "YZABO",
  },
]

export default UpcomingShows
