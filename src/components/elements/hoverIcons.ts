import styled from "styled-components"

interface HoverIconProps {
  color: string
}

export const HoverIcon = styled.a<HoverIconProps>`
  transition: all 0.5s ease;
  &:hover {
    filter: drop-shadow(0 0 8px ${props => props.color});
  }

  svg {
    margin-left: 36px;
    margin-right: 10px;
    height: 28px;
  }
`
