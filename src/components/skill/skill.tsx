import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={'120'} height={'120'}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`

const SkillTitle = styled.h3`
  color: #828282;
  text-align: center;
`