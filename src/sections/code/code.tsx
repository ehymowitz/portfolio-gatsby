import React from "react"
import { StyledCode } from "./code.styled"
import { StaticImage } from "gatsby-plugin-image"

interface codeProject {
  name: string
  subtitle: string
  image: string
  icons: string[]
}

const codeProjects: codeProject[] = [
  {
    name: "This Very Website",
    subtitle: "Where I get to show off my powers",
    image: "../../../static/code/portfolio.png",
    icons: ["Gatsby, Styledcomponents, Netlify"],
  },
  {
    name: "Set Sharer",
    subtitle: "For creating and sharing music sets",
    image: "../../../static/code/set-sharer.png",
    icons: ["Nextdotjs, Mongodb, Sass, Vercel"],
  },
]

const Code = () => {
  return (
    <StyledCode>
      <div>
        <h2>Projects I maintain</h2>
        <p>code projects</p>
        {codeProjects.map(project => {
          return (
            <StaticImage
              key={project.name}
              src={project.image}
              alt={project.name}
            />
          )
        })}
      </div>
    </StyledCode>
  )
}
// ;/Users/eeil / code / ehymowitz / portfolio / src / sections / code / code.tsx
// ;/Users/eeil / code / ehymowitz / portfolio / static / code / portfolio.png

export default Code
