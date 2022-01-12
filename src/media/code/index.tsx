import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const PortfolioImage = () => {
  return <StaticImage src="./portfolio.png" alt="portfolio" />
}
const SetSharerImage = () => {
  return <StaticImage src="./set-sharer.png" alt="set-sharer" />
}

interface codeProject {
  name: string
  subtitle: string
  image: () => JSX.Element
  icons: string[]
}

const codeProjects: codeProject[] = [
  {
    name: "This Very Website",
    subtitle: "Where I get to show off my powers",
    image: PortfolioImage,
    icons: ["Gatsby, Styledcomponents, Netlify"],
  },
  {
    name: "Set Sharer",
    subtitle: "For creating and sharing music sets",
    image: SetSharerImage,
    icons: ["Nextdotjs, Mongodb, Sass, Vercel"],
  },
]

export default codeProjects
