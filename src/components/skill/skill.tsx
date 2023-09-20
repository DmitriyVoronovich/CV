import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    viewBox?:string
    iconId: string
    title: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={'120'} height={'120'} viewBox={props.viewBox}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
margin-bottom: 10vh;
  
`

const SkillTitle = styled.h3`
  color: #828282;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`