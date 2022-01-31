import styled from "styled-components"
import { StyledSection } from "../../components/section/section.styled"

export const StyledCode = styled(StyledSection)``

export const CodeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 70% 70%;
    overflow-x: scroll;
  }
`

export const CodeContainer = styled.div`
  text-align: center;
  div {
    margin-top: 5px;
  }
`
