import React from 'react';
import {S} from '../Works_Styled'

type WorkPropsType = {
    title: string
    src: string
    text: string
    href: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImgWrapper>
                <S.Image src={props.src} alt={'Project home page'}/>
                <S.Text>{props.text}</S.Text>
            </S.ImgWrapper>
            <S.Link href={props.href}>{props.title}</S.Link>
        </S.Work>
    );
};