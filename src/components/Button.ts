import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Button = styled.button`
  width: 175px;
  height: 5vh;
  background-color: ${Theme.colors.primaryFont};
  border-radius: 20px;
  color: #FFF;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`
