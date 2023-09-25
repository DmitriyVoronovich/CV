import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/skill";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills id={'Skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <Text>I have experience with the following technologies:</Text>
                <FlexWrapper wrap={'wrap'} gap={'16%'} align={'center'} justify={'space-around'}>
                    <Skill iconId={'html'} title={'HTML5'}/>
                    <Skill iconId={'react'} title={'React'}/>
                    <Skill iconId={'redux'} title={'Redux'} viewBox={'0 0 105 105'}/>
                    <Skill iconId={'css'} title={'CSS'} viewBox={'0 0 115 115'}/>
                    <Skill iconId={'git'} title={'Version control'} viewBox={'0 0 105 105'}/>
                    <Skill iconId={'javascript'} title={'JavaScript'}/>
                    <Skill iconId={'gitHub'} title={'GitHub'} viewBox={'0 0 90 90'}/>
                    <Skill iconId={'sass'} title={'Sass'}/>
                </FlexWrapper >
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 90vh;
  flex-grow: 1;

  ${Container} {
    padding-top: 11.5vh;

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