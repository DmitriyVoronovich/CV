import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'

const skillsData = [
    {
        iconId: 'html',
        title: 'HTML5',
        viewBox: ''
    },
    {
        iconId: 'react',
        title: 'React',
        viewBox: ''
    },
    {
        iconId: 'redux',
        title: 'Redux',
        viewBox: '0 0 105 105'
    },
    {
        iconId: 'css',
        title: 'CSS',
        viewBox: '0 0 115 115'
    },
    {
        iconId: 'git',
        title: 'Version control',
        viewBox: '0 0 105 105'
    },
    {
        iconId: 'javascript',
        title: 'JavaScript',
        viewBox: ''
    },
    {
        iconId: 'gitHub',
        title: 'GitHub',
        viewBox: '0 0 90 90'
    },
    {
        iconId: 'sass',
        title: 'Sass',
        viewBox: ''
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'Skills'}>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <S.Text>I have experience with the following technologies:</S.Text>
                <FlexWrapper wrap={'wrap'} gap={'16%'} align={'center'} justify={'space-around'}>
                    {skillsData.map((item, index) => {
                        return (
                            <Skill key={index} iconId={item.iconId} title={item.title} viewBox={item.viewBox}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};