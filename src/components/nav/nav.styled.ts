import styled from "styled-components"

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Fraunces";
  align-items: center;
  position: fixed;
  top: 2em;
  width: 89%;

  ul {
    display: flex;
    a {
      font-size: 18px;
      padding: 0 10px;
    }
  }
`
