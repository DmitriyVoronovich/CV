import React from 'react';
import {S} from './PopUp_Styles'
import {Icon} from "../icon/Icon";
import { Button } from '../Button';
import {useTranslation} from "react-i18next";

type PopUpPropsType = {
    closePopUp?: () => void
}

export const PopUp: React.FC<PopUpPropsType> = (props: PopUpPropsType) => {

    const { t } = useTranslation();

    return (
        <S.PopUpWrapper>
            <Icon iconId={'ok'} width={'50'} height={'50'} viewBox={'0 0 25 25'}></Icon>
            <S.Text>{t("popUpText1")} <br/>{t("popUpText2")}</S.Text>
            <Button onClick={props.closePopUp}>{t("popUpBtn")}</Button>
        </S.PopUpWrapper>
    );
};