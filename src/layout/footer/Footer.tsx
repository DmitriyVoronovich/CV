import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {S} from './Footer_Styled'
import {useTranslation} from "react-i18next";

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

    const { t } = useTranslation();

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
                <S.Copyright> © 2023 {t("name")} {t("surname")}<br/> {t("footer")}</S.Copyright>
            </Container>
        </S.Footer>
    );
};