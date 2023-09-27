import React from 'react';
import {S} from './PopUp_Styles'
import {Icon} from "../icon/Icon";
import { Button } from '../Button';

type PopUpPropsType = {
    closePopUp?: () => void
}

export const PopUp: React.FC<PopUpPropsType> = (props: PopUpPropsType) => {
    return (
        <S.PopUpWrapper>
            <Icon iconId={'ok'} width={'50'} height={'50'} viewBox={'0 0 25 25'}></Icon>
            <S.Text>Thanks for your letter. <br/>I will answer as soon as possible.</S.Text>
            <Button onClick={props.closePopUp}>Return</Button>
        </S.PopUpWrapper>
    );
};