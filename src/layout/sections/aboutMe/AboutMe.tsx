import React, {useTransition} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './AboutMe_Styles'
import {useTranslation} from "react-i18next";

const informData = [
    {
        title: "aboutTitle1",
        text: "aboutText1",
    },
    {
        title: "aboutTitle2",
        text: "aboutText2"
    },
    {
        title: "aboutTitle3",
        text: "aboutText3",
    }
]

export const AboutMe: React.FC = () => {

    const { t } = useTranslation();

    return (
        <S.AboutMe id={'about'}>
            <Container>
                <S.InformationContainer>
                    <SectionTitle>{t("aboutMe")}</SectionTitle>
                    <div>
                        {informData.map((item, index) => {
                            return (
                                <S.InfoContainer key={index}>
                                    <S.TextTitle>{t(item.title)}</S.TextTitle>
                                    <S.Text>{t(item.text)}</S.Text>
                                </S.InfoContainer>
                                )

                        })}
                    </div>
                </S.InformationContainer>
            </Container>
        </S.AboutMe>
    );
};