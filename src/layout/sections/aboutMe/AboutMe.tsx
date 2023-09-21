import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <InformationContainer>
                    <SectionTitle>About me</SectionTitle>
                    <Text>Hi, I'm Dmitriy – Front-end developer from Grodno.<br/> I'm interested in Front-end development and everything
                        connected with it.</Text>
                    <Text>I'm studying at courses "Front-end" in <br/>IT-Incubator.</Text>
                    <Text>Ready to implement excellent projects<br/> with wonderful people.</Text>
                </InformationContainer>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
`
const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 50vh;
    padding-top: 14vh;
  padding-bottom: 13vh;
  gap: 6vh
`

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`