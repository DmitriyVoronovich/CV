import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import netflix from '../../../assets/images/netflix.png'
import social from '../../../assets/images/Rectangle14.png'
import marvel from '../../../assets/images/Marvel.png'
import {Container} from "../../../components/Container";
import {S} from './Works_Styled'

const worksData = [
    {
        title: 'Marvel information portal',
        src: marvel,
        href: 'https://github.com/DmitriyVoronovich/Marvel-project',
        text: `The service allows you to get information about a character from the Marvel universe, as well as a list of comics with this character. Technology stack: React, Redux...`
    },
    {
        title: 'Netflix-clone',
        src: netflix,
        href: 'https://github.com/DmitriyVoronovich/react-netflix',
        text: `A copy of the hosting into which films from the API service are uploaded. The project has the ability to add and remove films. Technology stack: React, Redux...`
    },
    {
        title: 'Social Network',
        src: social,
        href: 'https://github.com/DmitriyVoronovich/Social-network',
        text: `A copy of the social network. Technology stack: React, Redux...`
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works id={'project'}>
            <Container>
                <SectionTitle>Project</SectionTitle>
                <FlexWrapper direction={'column'}>
                    {worksData.map((item, index) => {
                        return (
                            <Work title={item.title} src={item.src} text={item.text} key={index} href={item.href}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};