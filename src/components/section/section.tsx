import React from "react"
import { StyledSection } from "./section.styled"

interface SectionProps {
  children: JSX.Element
}

const Section = ({ children }: SectionProps) => {
  return <StyledSection>{children}</StyledSection>
}

export default Section
