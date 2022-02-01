import styled from "styled-components"
import { HideOnScroll } from "../layout/layout.styled"

export const StyledNav = styled(HideOnScroll)`
  justify-content: space-between;
  font-family: "Fraunces";
  align-items: center;

  ul {
    display: flex;
    a {
      font-size: 18px;
      padding: 0 10px;
    }
  }
`
