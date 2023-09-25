import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import netflix from '../../../assets/images/netflix.png'
import marvel from '../../../assets/images/Marvel.png'
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Works = () => {
    return (
        <StyledWorks id={'Project'}>
            <Container>
                <SectionTitle>Project</SectionTitle>
                <FlexWrapper direction={'column'}>
                    <Work title={'Marvel information portal'} src={marvel}
                          text={'The service allows you to get information about a character from the Marvel universe, as well as a list of comics with this character.. Technology stack: React, Redux...'}/>
                    <Work title={'Netflix-clone'} src={netflix}
                          text={'A copy of the hosting into which films from the API service are uploaded. The project has the ability to add and remove films. Technology stack: React, Redux...'}/>
                    <Work title={'Social Network'} src={netflix}
                          text={'A copy of the social network. Technology stack: React, Redux...'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${Container} {
      ${SectionTitle} {
        margin-bottom: 6vh;
        padding-top: 11vh;

        @media ${Theme.media.tablet} {
          padding-top: 7vh;
          margin-bottom: 5vh;
        }
      }
    }
`