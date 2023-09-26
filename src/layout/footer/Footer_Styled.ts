import styled from "styled-components";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";

const Footer = styled.footer`
    ${Container} {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-top: 14vh;

      @media ${Theme.media.tablet} {
        padding-top: 7vh;
      }
    }
`

const SocialItem = styled.li`

`

const SocialList = styled.ul`
display: flex;
  list-style-type: none;
  gap: 5%;
  justify-content: center;
`

const SocialLink = styled.a`

`

const Copyright = styled.small`
text-align: center;
  margin-top: 2vh;
  margin-bottom: 5vh;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${Theme.colors.secondaryFont};
`

export const S = {
    Footer,
    SocialItem,
    SocialList,
    SocialLink,
    Copyright
}