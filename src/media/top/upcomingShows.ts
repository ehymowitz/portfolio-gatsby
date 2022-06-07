interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "June 10th",
    location: "Canadian Music Week",
    band: "Jace Carrillo",
    link: "https://cmw.net/festival/artists/jace-carrillo/"
  },
  { date: "June 15th", location: "Bar Courcelle", band: "Markus Murphy"},
  { date: "June 16th", location: "Parc des Ameriques", band: "YZABO", link: "https://allevents.in/saint-lambert/parc-fringe-park-2022/200022744118301"},
  { date: "June 27th", location: "Petit Campus", band: "Hansom Eli", link: "https://shows.cafecampus.com/evenements"},
]

export default UpcomingShows
