import React, {useState} from 'react';
import photo from '../../../assets/images/heder.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import {useTranslation} from "react-i18next";
import i18n from '../../../i18n';
import useLocalStorage from '../../../uselang';

export const Main: React.FC = () => {

    const {t} = useTranslation();
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [activeEn, setActiveEn] = useState(true);
    const [activeRu, setActiveRu] = useState(false);

    React.useEffect(() => {
        if (language === 'ru') {
            setActiveEn(false);
            setActiveRu(true);
        }
    }, []);

    const handleLenguageChangeEn = () => {
        if (language === 'ru') {
            i18n.changeLanguage('en');
            setLanguage('en');
            setActiveEn(true);
            setActiveRu(false);
        }
    };

    const handleLenguageChangeRu = () => {
        if (language === 'en') {
            i18n.changeLanguage('ru');
            setLanguage('ru');
            setActiveEn(false);
            setActiveRu(true);
        }
    };

    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper direction={'column'}>
                    <S.Text>
                        <S.Wrapper>
                            <S.Name>{t("name")} <br/>{t("surname")}</S.Name>
                            <S.TextContainer>
                                <h1>{t("devel")}</h1>
                                <span>{t("year")}</span>
                            </S.TextContainer>
                        </S.Wrapper>
                        <S.ButtonContainer>
                            <S.LanguageRu onClick={handleLenguageChangeRu} activeRu={activeRu}>RU</S.LanguageRu>
                            <span>|</span>
                            <S.LanguageEn onClick={handleLenguageChangeEn} activeEn={activeEn}>ENG</S.LanguageEn>
                        </S.ButtonContainer>
                    </S.Text>
                    <S.Photo src={photo} alt='developer foto'/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};