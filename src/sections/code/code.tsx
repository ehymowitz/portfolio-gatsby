import React from "react"
import { GitHubIcon, LinkedInIcon } from "../../components/hoverIcons/linkIcons"
import { SmallText, TitleText } from "../../components/section/section.styled"
import codeProjects from "../../media/code"
import { CodeContainer, CodeList, StyledCode } from "./code.styled"

const Code = () => {
  return (
    <StyledCode id="code">
      <div>
        <TitleText>
          <h1>Projects I maintain</h1>
          <div>
            <LinkedInIcon />
            <a
              href="https://www.linkedin.com/in/eliehymowitz/"
              target="_blank"
              rel="noopener"
            >
              <SmallText>To reach me in a professional setting</SmallText>
            </a>
            <GitHubIcon />
            <a
              href="https://github.com/ehymowitz"
              target="_blank"
              rel="noopener"
            >
              <SmallText>To see what I'm working on these days</SmallText>
            </a>
          </div>
        </TitleText>
        <SmallText style={{ textAlign: "right", marginTop: "-5px" }}>
          ** I'm currently employed at{" "}
          <a
            href="https://www.cloudraker.com/en/"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "underline" }}
          >
            CloudRaker
          </a>
          , so I'm not working on too too many side projects these days
        </SmallText>
        <CodeList>
          {codeProjects.map(project => {
            return (
              <React.Fragment key={project.name}>
                <CodeContainer>
                  <h3>{project.name}</h3>
                  {project.icons.map(icon => (
                    <React.Fragment key={icon.name}>
                      <icon.component />
                    </React.Fragment>
                  ))}
                  <div>
                    <a href={project.link} target="_blank" rel="noopener">
                      <project.image />
                    </a>
                  </div>
                  <h3>{project.subtitle}</h3>
                </CodeContainer>
              </React.Fragment>
            )
          })}
        </CodeList>
      </div>
    </StyledCode>
  )
}

export default Code
