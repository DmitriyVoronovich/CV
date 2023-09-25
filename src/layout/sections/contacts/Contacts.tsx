import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styled';
import React from "react";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={'Contacts'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Text>Want to know more or just chat? <br/>
                    You are welcome!</S.Text>
                <S.Form>
                    <S.Field  placeholder={'name'}/>
                    <S.Field placeholder={'mail'}/>
                    <S.Field as={'textarea'} placeholder={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};