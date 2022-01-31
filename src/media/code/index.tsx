import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  GatsbyIcon,
  MongoIcon,
  NetlifyIcon,
  NextJSIcon,
  SassIcon,
  StyledComponentsIcon,
  VercelIcon,
} from "../../components/hoverIcons/linkIcons"

const PortfolioImage = () => {
  return <StaticImage src="./portfolio.png" alt="portfolio" />
}
const SetSharerImage = () => {
  return <StaticImage src="./set-sharer.png" alt="set-sharer" />
}

interface Icon {
  name: string
  component: () => JSX.Element
}

interface codeProject {
  name: string
  subtitle: string
  image: () => JSX.Element
  icons: Icon[]
  link: string
}

const codeProjects: codeProject[] = [
  {
    name: "This Very Website",
    subtitle: "Where I get to show off my powers",
    image: PortfolioImage,
    icons: [
      { component: GatsbyIcon, name: "Gatsby" },
      { component: StyledComponentsIcon, name: "Styled Components" },
      { component: NetlifyIcon, name: "Netlify" },
    ],
    link: "#top",
  },
  {
    name: "Set Sharer",
    subtitle: "For creating and sharing music sets",
    image: SetSharerImage,
    icons: [
      { component: NextJSIcon, name: "NextJS" },
      { component: MongoIcon, name: "MongoDB" },
      { component: SassIcon, name: "Sass" },
      { component: VercelIcon, name: "Vercel" },
    ],
    link: "https://set-sharer.vercel.app/",
  },
]

export default codeProjects
