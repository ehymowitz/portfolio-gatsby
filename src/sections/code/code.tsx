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
          <h2>Projects I maintain</h2>
          <div>
            <a
              href="https://www.linkedin.com/in/eliehymowitz/"
              target="_blank"
              rel="noopener"
            >
              <SmallText>
                <LinkedInIcon />
                To reach me in a professional setting
              </SmallText>
            </a>
            <a
              href="https://github.com/ehymowitz"
              target="_blank"
              rel="noopener"
            >
              <SmallText>
                <GitHubIcon /> To see what I'm working on these days
              </SmallText>
            </a>
          </div>
        </TitleText>
        <SmallText>
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
                  <a href={project.link} target="_blank" rel="noopener">
                    <h3>{project.name}</h3>
                    {project.icons.map(icon => (
                      <React.Fragment key={icon.name}>
                        <icon.component />
                      </React.Fragment>
                    ))}
                    <div>
                      <project.image />
                    </div>
                    <p>{project.subtitle}</p>
                  </a>
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
