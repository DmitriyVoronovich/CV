import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialList>
                <SocialItem>
                    <SocialLink href={''}>
                        <Icon iconId={'instagram'} viewBox={'0 0 40 40'} height={'40px'} width={'40px'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href={''}>
                        <Icon iconId={'gitHub'} viewBox={'0 0 88 88'} height={'40px'} width={'40px'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink href={''}>
                        <Icon iconId={'linkedIn'} viewBox={'0 0 42 42'} height={'40px'} width={'40px'}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright> © 2023 Dmitriy Voronovich<br/> All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  margin: 8vh auto 0 auto;
  justify-content: center;
  flex-direction: column;
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
`