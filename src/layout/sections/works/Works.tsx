import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import netflix from '../../../assets/images/netflix.png'
import social from '../../../assets/images/Rectangle14.png'
import marvel from '../../../assets/images/Marvel.png'
import {Container} from "../../../components/Container";
import {S} from './Works_Styled'
import {useTranslation} from "react-i18next";

const worksData = [
    {
        title: "projectTitle1",
        src: marvel,
        href: 'https://github.com/DmitriyVoronovich/Marvel-project',
        homePage: 'https://dmitriyvoronovich.github.io/Marvel-project/',
        text: "projectText1"
    },
    {
        title: "projectTitle2",
        src: netflix,
        href: 'https://github.com/DmitriyVoronovich/react-netflix',
        homePage: '',
        text: "projectText2"
    },
    {
        title: "projectTitle3",
        src: social,
        href: 'https://github.com/DmitriyVoronovich/Social-network',
        homePage: 'https://github.com/DmitriyVoronovich/Social-network',
        text: "projectText3"
    }
]

export const Works: React.FC = () => {

    const { t } = useTranslation();

    return (
        <S.Works id={'project'}>
            <Container>
                <SectionTitle>{t("project")}</SectionTitle>
                <FlexWrapper direction={'column'}>
                    {worksData.map((item, index) => {
                        return (
                            <Work title={t(item.title)} src={item.src} text={t(item.text)} key={index} href={item.href}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};