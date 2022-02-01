import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  height: 90vh;
  min-height: 800px;
  scroll-snap-align: center;
`

export const TitleText = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    div {
      display: grid;
    }
  }
`

export const SmallText = styled.p`
  font-size: 12px;
  @media only screen and (max-width: 1024px) {
    text-align: left !important;
    margin-top: 5px !important;
  }
`
