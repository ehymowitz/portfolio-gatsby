import React from "react"
import codeProjects from "../../media/code"
import { CodeContainer, CodeList, StyledCode } from "./code.styled"

const Code = () => {
  return (
    <StyledCode>
      <div>
        <h2>Projects I maintain</h2>
        <CodeList>
          {codeProjects.map(project => {
            return (
              <CodeContainer key={project.name}>
                <>
                  <h3>{project.name}</h3>
                  <project.image />
                  <p>{project.subtitle}</p>
                </>
              </CodeContainer>
            )
          })}
        </CodeList>
      </div>
    </StyledCode>
  )
}

export default Code
