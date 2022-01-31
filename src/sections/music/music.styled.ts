import styled from "styled-components"
import { StyledSection } from "../../components/section/section.styled"

export const StyledMusic = styled(StyledSection)``

export const MusicList = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-auto-flow: column;
  overflow-x: scroll;
  width: 90vw;
  height: 500px;
  align-items: center;
`

export const MusicContainer = styled.div`
  text-align: center;
  iframe {
    transition: all 0.3s ease;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
    width: 560px;
    height: 315px;

    @media only screen and (min-width: 768px) {
      &:hover {
        width: 600px;
        height: 390px;
      }
    }
  }
`
