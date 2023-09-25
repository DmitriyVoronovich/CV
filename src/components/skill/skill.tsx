import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from '../../layout/sections/skills/Skills_Styles'

type SkillPropsType = {
    viewBox?:string
    iconId: string
    title: string
}

export const Skill: React.FC<SkillPropsType> = (props:SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={'120'} height={'120'} viewBox={props.viewBox}/>
            <S.Title>{props.title}</S.Title>
        </S.Skill>
    );
};