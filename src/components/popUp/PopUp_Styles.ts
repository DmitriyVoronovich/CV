import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const PopUpWrapper = styled.div`
  max-width: 49vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4vh;
  border: 1px solid ${Theme.colors.primaryFont};
  padding: 2vh;
`

const Text = styled.p`
  text-align: center;
  font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const S ={
    PopUpWrapper,
    Text
}