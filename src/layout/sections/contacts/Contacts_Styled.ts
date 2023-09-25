import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

const Contacts = styled.section`
  
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12vh;

    @media ${Theme.media.tablet} {
      padding-top: 7vh;
    }
  }
`

const Text = styled.p`
  max-width: 40%;
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 2.5vh 0 3.6vh;

  @media ${Theme.media.tablet} {
    max-width: 80%;
  }

  @media ${Theme.media.tablet} {
    max-width: 90%;
  }
`

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media ${Theme.media.tablet} {
    width: 70%;
  }

  @media ${Theme.media.mobile} {
    width: 90%;
  }
  
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

export const S = {
    Contacts,
    Text,
    Form,
    Field
}