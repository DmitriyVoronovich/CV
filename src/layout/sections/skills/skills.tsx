import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <span>I have experience with the following technologies</span>
            <FlexWrapper wrap={'wrap'} gap={'16%'}>
                <Skill iconId={'html'} title={'HTML5'}/>
                <Skill iconId={'react'} title={'react'}/>
                <Skill iconId={'redux'} title={'redux'}/>
                <Skill iconId={'css'} title={'css'}/>
                <Skill iconId={'git'} title={'gitHub'}/>
                <Skill iconId={'javascript'} title={'javascript'}/>
                <Skill iconId={'gitHub'} title={'gitHub'}/>
                <Skill iconId={'sass'} title={'sass'}/>
            </FlexWrapper >
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 943px;
  margin: 0 auto;
`