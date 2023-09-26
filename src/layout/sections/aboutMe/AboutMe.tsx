import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {S} from './AboutMe_Styles'

export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe id={'about'}>
            <Container>
                <S.InformationContainer>
                    <SectionTitle>About me</SectionTitle>
                    <S.Text>Hi, I'm Dmitriy – Front-end developer from Grodno.<br/> I'm interested in Front-end development and everything
                        connected with it.</S.Text>
                    <S.Text>I'm studying at courses "Front-end" in <br/>IT-Incubator.</S.Text>
                    <S.Text>Ready to implement excellent projects<br/> with wonderful people.</S.Text>
                </S.InformationContainer>
            </Container>
        </S.AboutMe>
    );
};