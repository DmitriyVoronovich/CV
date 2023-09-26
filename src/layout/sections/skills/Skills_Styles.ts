import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

const Skills = styled.section`
  min-height: 90vh;
  flex-grow: 1;

  ${Container} {
    padding-top: 12vh;

    @media ${Theme.media.tablet} {
      padding-top: 7vh;
      gap: 6vh;
    }

    @media ${Theme.media.tablet} {
      padding-top: 7vh;
      gap: 6vh;
    }
  }
`

const Text = styled.p`
  text-align: center;
  margin: 9vh 0 8vh 0;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media ${Theme.media.tablet} {
    margin: 6vh 0 5vh 0;
  }
`

// Skill

const Skill = styled.div`
margin-bottom: 8vh;

  @media ${Theme.media.tablet} {
    margin-bottom: 5vh;
  }
`

const Title = styled.h3`
  max-width: 120px;
  max-height: 147px;
  color: #828282;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const S = {
    Skills,
    Text,
    Skill,
    Title
}