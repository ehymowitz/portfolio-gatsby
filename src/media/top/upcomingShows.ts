interface UpcomingShow {
  date: string
  location: string
  band: string
  link?: string
}

const UpcomingShows: UpcomingShow[] = [
  {
    date: "May 17th",
    location: "La Marche à côté",
    band: "Ohiana",
  },
  { date: "May 19th", location: "LE SALON - Collectif Créatif", band: "Hansom Ēli", link: "https://fb.me/e/391X4dCMO" },
  { date: "May 21st", location: "LE SALON - Collectif Créatif", band: "Hansom Ēli", link: "https://fb.me/e/391X4dCMO" },
]

export default UpcomingShows
