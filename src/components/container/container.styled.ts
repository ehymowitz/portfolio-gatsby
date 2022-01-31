import styled from "styled-components"

export const StyledContainer = styled.div`
  margin: 2em 5em;

  @media only screen and (max-width: 1024px) {
    margin: 1em 3em;
  }

  @media only screen and (max-width: 425px) {
    margin: 20px;
  }
`
