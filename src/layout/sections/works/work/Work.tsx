import React from 'react';
import {S} from '../Works_Styled'
// import {Button} from "../../../../components/Button";

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
                {/*<S.ButtonWrapper>*/}
                {/*    <a href={'https://www.emailjs.com/docs/examples/reactjs/'}>*/}
                {/*        <Button>Project</Button>*/}
                {/*    </a>*/}
                {/*    <a href={props.href}>*/}
                {/*        <Button>Code</Button>*/}
                {/*    </a>*/}
                {/*</S.ButtonWrapper>*/}
            </S.ImgWrapper>
            <S.Link href={props.href}>{props.title}</S.Link>
        </S.Work>
    );
};