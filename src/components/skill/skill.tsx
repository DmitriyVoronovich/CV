import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

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
margin-bottom: 8vh;

  @media ${Theme.media.tablet} {
    margin-bottom: 5vh;
  }
`

const SkillTitle = styled.h3`
  max-width: 120px;
  max-height: 147px;
  color: #828282;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`