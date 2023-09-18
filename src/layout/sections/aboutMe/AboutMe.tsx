import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>About me</SectionTitle>
            <Text>Hi, I'm Denis – UX/UI designer from Minsk.<br/> I'm interested in design and everything connected with it.</Text>
            <Text>I'm studying at courses "Web and mobile design <br/> interfaces" in IT-Academy.</Text>
            <Text>Ready to implement excellent projects<br/> with wonderful people.</Text>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background: #F6F6F6;
  min-height: 50vh;
`

const Text = styled.p`
text-align: center;
`