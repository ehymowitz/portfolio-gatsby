import styled from "styled-components"
import { StyledSection } from "../../components/section/section.styled"

export const StyledTop = styled(StyledSection)`
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const StyledUpcomingShows = styled.div`
  text-align: right;
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }

  @media only screen and (max-width: 425px) {
    text-align: center;
    h2 {
      margin-bottom: 5px;
      font-size: 12px;
    }

    p,
    h3 {
      margin: 5px 2px;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`
