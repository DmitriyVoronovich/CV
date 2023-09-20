import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
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
  min-height: 100vh;
  
  ${Container} {
    padding-top: 11.5vh;
  }
`

const Text = styled.p`
  text-align: center;
  margin: 9vh 0 8vh 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`