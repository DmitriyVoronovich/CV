import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import netflix from '../../../assets/images/netflix.png'
import marvel from '../../../assets/images/Marvel.png'
import {Container} from "../../../components/Container";
import {S} from './Works_Styled'

const worksData = [
    {
        title: 'Marvel information portal',
        src: marvel,
        text: `The service allows you to get information about a character from the Marvel universe, as well as a list of comics with this character. Technology stack: React, Redux...`
    },
    {
        title: 'Netflix-clone',
        src: netflix,
        text: `A copy of the hosting into which films from the API service are uploaded. The project has the ability to add and remove films. Technology stack: React, Redux...`
    },
    {
        title: 'Social Network',
        src: netflix,
        text: `A copy of the social network. Technology stack: React, Redux...`
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works id={'Project'}>
            <Container>
                <SectionTitle>Project</SectionTitle>
                <FlexWrapper direction={'column'}>
                    {worksData.map((item, index) => {
                        return (
                            <Work title={item.title} src={item.src} text={item.text} key={index}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};