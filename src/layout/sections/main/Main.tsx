import React from 'react';
import photo from '../../../assets/images/heder.webp'
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={'column'}>
                    <StyledText>
                        <StyledName>Dmitriy <br/>Voronovich</StyledName>
                        <TextContainer>
                            <h1>Front-end Developer</h1>
                            <span>25 years old, Grodno</span>
                        </TextContainer>
                        <div aria-hidden={true}></div>
                        <div aria-hidden={true}></div>
                        <Language>ENG</Language>
                    </StyledText>
                    <Photo src={photo} alt='developer foto'/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15vh 0 3.5vh 0;
`

const StyledMain = styled.div`
  display: flex;
  justify-content: center;

`

const Photo = styled.img`
  width: 100%;
  height: 49vh;
  object-fit: cover;
  margin-bottom: 13vh;
`

const Language = styled.span`
transform: rotate(270deg);
  height: 0.5vh;
  margin-top: 8vh;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`

const StyledName = styled.h2`
  color: ${Theme.colors.primaryFont};
  font-size: 47.339px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`

const TextContainer = styled.div`
  padding-top: 9.6vh;
  
  h1 {
    color: ${Theme.colors.primaryFont};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  span {
    color: ${Theme.colors.primaryFont};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
`