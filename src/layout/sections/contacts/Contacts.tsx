import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <Text>Want to know more or just chat? <br/>
                    You are welcome!</Text>
                <StyledForm>
                    <Field  placeholder={'name'}/>
                    <Field placeholder={'mail'}/>
                    <Field as={'textarea'} placeholder={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12vh;
  }
`

const Text = styled.p`
  max-width: 40%;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 2.5vh 0 3.6vh;
`

const StyledForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  ${Button} {
    margin: 0 auto;
  }
  
  textarea {
    resize: none;
    height: 12vh;
  }
`

const Field = styled.input`
  font-family: 'Poppins', serif;
    width: 100%;
  padding: 5px;
  border: 2px solid ${Theme.colors.primaryFont};
  color:${Theme.colors.primaryFont};
  
  &::placeholder {
    color: ${Theme.colors.secondaryFont};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    border: 3px solid ${Theme.colors.primaryFont};
  }
`