import React from 'react';
import photo from '../../../assets/images/heder.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper direction={'column'}>
                    <S.Text>
                        <S.Wrapper>
                            <S.Name>Dmitriy <br/>Voronovich</S.Name>
                            <S.TextContainer>
                                <h1>Front-end Developer</h1>
                                <span>25 years old, Grodno</span>
                            </S.TextContainer>
                        </S.Wrapper>
                        <S.Language>ENG</S.Language>
                    </S.Text>
                    <S.Photo src={photo} alt='developer foto'/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};