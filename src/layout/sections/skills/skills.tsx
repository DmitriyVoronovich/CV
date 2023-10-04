import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "../../../components/skill/skill";
import {Container} from "../../../components/Container";
import {Fade} from "react-awesome-reveal";
import {S} from './Skills_Styles';
import {useTranslation} from "react-i18next";

const skillsData = [
    {
        iconId: 'html',
        title: 'HTML5',
        viewBox: '',
        level: ['true', 'true', 'true', 'true', 'true']
    },
    {
        iconId: 'react',
        title: 'React',
        viewBox: '',
        level: ['true', 'true', 'true', 'true', 'false']
    },
    {
        iconId: 'redux',
        title: 'Redux',
        viewBox: '0 0 105 105',
        level: ['true', 'true', 'true', 'false', 'false']
    },
    {
        iconId: 'css',
        title: 'CSS',
        viewBox: '0 0 115 115',
        level: ['true', 'true', 'true', 'true', 'false']
    },
    {
        iconId: 'git',
        title: 'Version control',
        viewBox: '0 0 105 105',
        level: ['true', 'true', 'true', 'false', 'false']
    },
    {
        iconId: 'javascript',
        title: 'JavaScript',
        viewBox: '',
        level: ['true', 'true', 'true', 'true', 'false']
    },
    {
        iconId: 'gitHub',
        title: 'GitHub',
        viewBox: '0 0 90 90',
        level: ['true', 'true', 'true', 'true', 'false']
    },
    {
        iconId: 'sass',
        title: 'Sass',
        viewBox: '',
        level: ['true', 'true', 'true', 'true', 'false']
    }
]

export const Skills: React.FC = () => {

    const { t } = useTranslation();

    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>{t("skills")}</SectionTitle>
                <S.Text>{t("skillsText")}</S.Text>
                <FlexWrapper wrap={'wrap'} gap={'5vh'} align={'center'} justify={'space-around'}>
                    <Fade cascade={true} damping={0.3}>
                    {skillsData.map((item, index) => {
                        return (
                            <Skill key={index} iconId={item.iconId} title={item.title} viewBox={item.viewBox} level={item.level}/>
                        )
                    })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};