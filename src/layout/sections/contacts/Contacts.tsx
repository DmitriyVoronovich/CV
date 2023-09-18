import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <Text>Want to know more or just chat?
                You are welcome!</Text>
            <StyledForm>
                <Field  placeholder={'name'}/>
                <Field placeholder={'mail'}/>
                <Field as={'textarea'} placeholder={'message'}/>
                <Button type={'submit'}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 76%;
  align-items: center;
`

const Text = styled.p`
max-width: 23%;
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px
`

const Field = styled.input`
    width: 300px;
`