import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: ${Theme.colors.primaryFont};
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (34 - 30) + 30px);
  font-style: normal;
  font-weight: bold;
`