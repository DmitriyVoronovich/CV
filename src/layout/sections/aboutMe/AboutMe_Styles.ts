import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const AboutMe = styled.section`
`
const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 50vh;
  padding-top: 14vh;
  padding-bottom: 13vh;
  gap: 6vh;

  @media ${Theme.media.tablet} {
    padding-top: 7vh;
    padding-bottom: 7vh;
    gap: 6vh;
  }
`

const Text = styled.p`
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const S = {
    AboutMe,
    InformationContainer,
    Text
}