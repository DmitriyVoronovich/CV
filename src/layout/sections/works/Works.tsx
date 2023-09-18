import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import p1 from '../../../assets/images/p1.png'
import p2 from '../../../assets/images/p2.png'

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Project</SectionTitle>
            <FlexWrapper direction={'column'}>
                <Work title={'Marvel'} src={p1}
                      text={'A copy of the hosting into which films from the API service are uploaded. The project has the ability to add and remove films. Technology stack: React, Redux...'}/>
                <Work title={'Netflix'} src={p2}
                      text={'A copy of the hosting into which films from the API service are uploaded. The project has the ability to add and remove films. Technology stack: React, Redux...'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #F6F6F6;
`