import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './AboutMe_Styles'

const informData = [
    {
        title: 'Let me introduce',
        text: 'Hi, I\'m Dmitriy – Front-end developer from Grodno. I\'m interested in Front-end development and everything\n' +
            '                            connected with it.',
    },
    {
        title: 'My training',
        text: 'I\'m completed the course \"Complete course on JavaScript + React - from scratch to result\" on the Udemy platform. Now I\'m studying at courses "Front-end" in IT-Incubator.',
    },
    {
        title: 'Ready to go',
        text: 'Ready to implement excellent projects with wonderful people.',
    }
]

export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe id={'about'}>
            <Container>
                <S.InformationContainer>
                    <SectionTitle>About me</SectionTitle>
                    <div>
                        {informData.map((item, index) => {
                            return (
                                <S.InfoContainer key={index}>
                                    <S.TextTitle>{item.title}</S.TextTitle>
                                    <S.Text>{item.text}</S.Text>
                                </S.InfoContainer>
                                )

                        })}
                    </div>
                </S.InformationContainer>
            </Container>
        </S.AboutMe>
    );
};