import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styled';
import React, {ElementRef, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";

type ContactsPropsType = {
    openPopUp?: () => void
}

export const Contacts: React.FC<ContactsPropsType> = (props:ContactsPropsType) => {

    const { t } = useTranslation();
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
                <SectionTitle>{t("contacts")}</SectionTitle>
                <S.Text>{t("contactText1")} <br/>
                    {t("contactText2")}</S.Text>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required={true} placeholder={t("contactInputName")} name="user_name"/>
                    <S.Field required={true} placeholder={t("contactInputEmail")} name="email" type={"email"}/>
                    <S.Field required={true} placeholder={t("contactInputSubject")} name="subject"/>
                    <S.Field required={true} as={'textarea'} placeholder={t("contactInputMessage")} name="message"/>
                    <Button type={'submit'} onClick={props.openPopUp}>{t("contactBtn")}</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};