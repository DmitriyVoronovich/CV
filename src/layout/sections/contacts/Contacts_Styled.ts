import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

const Contacts = styled.section`
  
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14vh;

    @media ${Theme.media.tablet} {
      padding-top: 10vh;
    }
  }
`

const Text = styled.p`
  max-width: 50%;
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 3vh 0 4vh;

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
  gap: 16px;

  @media ${Theme.media.tablet} {
    width: 70%;
  }

  @media ${Theme.media.mobile} {
    width: 90%;
  }
  
  ${Button} {
    margin: 4vh auto;
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
  color: ${Theme.colors.primaryFont};

  &::placeholder {
    color: ${Theme.colors.secondaryFont};
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