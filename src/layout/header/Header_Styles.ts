import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const StyledHeader = styled.header`
  background: ${Theme.colors.secondaryBg};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  opacity: 0.95;
`

export const S = {
    StyledHeader
}