import React from "react"
import codeProjects from "../../media/code"
import { StyledCode } from "./code.styled"

const Code = () => {
  return (
    <StyledCode>
      <div>
        <h2>Projects I maintain</h2>
        {codeProjects.map(project => {
          return (
            <div key={project.name}>
              <project.image />
            </div>
          )
        })}
      </div>
    </StyledCode>
  )
}

export default Code
