import styled from "styled-components"
import { StyledSection } from "../../components/section/section.styled"

export const StyledCode = styled(StyledSection)``

export const CodeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`

export const CodeContainer = styled.div`
  text-align: center;
  div {
    margin-top: 5px;
  }
`
