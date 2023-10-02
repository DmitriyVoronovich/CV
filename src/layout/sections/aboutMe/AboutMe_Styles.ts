import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const AboutMe = styled.section`
`
const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  div {
    display: flex;
    justify-content: space-between;
    
    div {
      justify-content: start;
    }

    @media ${Theme.media.tablet} {
      flex-direction: column;
      align-items: center;
    }
  }
  
  min-height: 50vh;
  padding-top: 12vh;
  padding-bottom: 13vh;
  gap: 6vh;

  @media ${Theme.media.tablet} {
    padding-top: 10vh;
    padding-bottom: 7vh;
    gap: 6vh;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30%;

  @media ${Theme.media.tablet} {
    max-width: 80%;
    margin-top: 4vh;
  }
`

const TextTitle = styled.h3`
  color: ${Theme.colors.primaryFont};
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (20 - 18) + 18px);
  font-style: normal;
  font-weight: 700;
`

const Text = styled.p`
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2vh;
`

export const S = {
    AboutMe,
    InformationContainer,
    Text,
    InfoContainer,
    TextTitle
}