import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {S} from './Footer_Styled'

const socialData = [
    {
        href:'https://www.instagram.com/',
        iconId: 'instagram',
        viewBox: '0 0 40 40'
    },
    {
        href:'https://github.com/DmitriyVoronovich',
        iconId: 'gitHub',
        viewBox: '0 0 88 88'
    },
    {
        href:'https://www.linkedin.com/in/dzmitry-voronovich-405379188/',
        iconId: 'linkedIn',
        viewBox: '0 0 42 42'
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.SocialList>
                    {socialData.map((item, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink href={item.href}>
                                    <Icon iconId={item.iconId} viewBox={item.viewBox} height={'40px'} width={'40px'}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright> © 2023 Dmitriy Voronovich<br/> All Rights Reserved.</S.Copyright>
            </Container>
        </S.Footer>
    );
};