import styled from "styled-components"
import { StyledSection } from "../../components/section/section.styled"

export const StyledMusic = styled(StyledSection)``

export const MusicTitleText = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  p,
  a {
    margin: 0;
    margin-left: 25px;
    font-size: 12px;
    svg {
      margin-left: 36px;
      height: 28px;
    }
  }
`

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

    &:hover {
      width: 600px;
      height: 400px;
    }
  }
`
