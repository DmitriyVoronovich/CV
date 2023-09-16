import React from 'react';
import photo from '../../../assets/images/heder.webp'
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={'column'}>
                <StyledText>
                    <span>Dmitriy Voronovich</span>
                    <div>
                        <h1>Front-end Developer</h1>
                        <span>25 years old, Grodno</span>
                    </div>
                    <span>ENG</span>
                </StyledText>
                <Photo src={photo} alt='developer foto'/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledMain = styled.div`
  display: flex;
  justify-content: center;

`

const Photo = styled.img`
  width: 943.612px;
  height: 387px;
  object-fit: cover;
`