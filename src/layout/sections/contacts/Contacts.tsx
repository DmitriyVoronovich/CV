import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styled';
import React, {ElementRef, useRef, useState} from "react";
import emailjs from '@emailjs/browser';

type ContactsPropsType = {
    openPopUp?: () => void
}

export const Contacts: React.FC<ContactsPropsType> = (props:ContactsPropsType) => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_ezzxrq9', 'template_k1sq9z5', form.current, 'VRz3LfGUNkBWKDEeM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Text>Want to know more or just chat? <br/>
                    You are welcome!</S.Text>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required={true} placeholder={'name'} name="user_name"/>
                    <S.Field required={true} placeholder={'email'} name="email" type={"email"}/>
                    <S.Field required={true} placeholder={'subject'} name="subject"/>
                    <S.Field required={true} as={'textarea'} placeholder={'message'} name="message"/>
                    <Button type={'submit'} onClick={props.openPopUp}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};