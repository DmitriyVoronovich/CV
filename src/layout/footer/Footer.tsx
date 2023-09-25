import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={'https://www.instagram.com/'}>
                            <Icon iconId={'instagram'} viewBox={'0 0 40 40'} height={'40px'} width={'40px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={'https://github.com/DmitriyVoronovich'}>
                            <Icon iconId={'gitHub'} viewBox={'0 0 88 88'} height={'40px'} width={'40px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={'https://www.linkedin.com/in/dzmitry-voronovich-405379188/'}>
                            <Icon iconId={'linkedIn'} viewBox={'0 0 42 42'} height={'40px'} width={'40px'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright> © 2023 Dmitriy Voronovich<br/> All Rights Reserved.</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    ${Container} {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-top: 10vh;

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