import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from '../../layout/sections/skills/Skills_Styles'

type SkillPropsType = {
    viewBox?:string
    iconId: string
    title: string
    level: Array<string>
}

export const Skill: React.FC<SkillPropsType> = (props:SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} width={'120'} height={'120'} viewBox={props.viewBox}/>
            <S.Title>{props.title}</S.Title>
            <S.StarWrapper>
                {props.level.map((item, index) => {
                    if (item === 'true') {
                        return (
                            <Icon iconId={'star'} width={'26'} height={'26'} viewBox={'0 0 25 25'}/>
                        )
                    } else {
                        return (
                            <Icon iconId={'star1'} width={'26'} height={'26'} viewBox={'0 0 25 25'}/>
                        )
                    }
                })}
            </S.StarWrapper>
        </S.Skill>
    );
};