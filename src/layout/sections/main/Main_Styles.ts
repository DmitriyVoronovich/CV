import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

type LanguagePropsType = {
    activeEn?: boolean
    activeRu?: boolean
}

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 13vh 0 3.5vh 0;


  @media ${Theme.media.tablet} { 
    padding: 4vh 0 3.5vh 0;
  }
  
  @media ${Theme.media.mobile} {
    padding: 9vh 0 2vh 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 7.5vw;
  align-items: end;

  @media ${Theme.media.tablet} {
  }

  @media ${Theme.media.mobile} {
    flex-direction: column;
    gap: 1vh;
    align-items: start;
  }
`

const Main = styled.div`
  display: flex;
  justify-content: center;
`

const Photo = styled.img`
  width: 100%;
  height: 49vh;
  object-fit: cover;
  margin-bottom: 13vh;
  
  @media ${Theme.media.tablet} {
    margin-bottom: 9vh;
  }

  @media ${Theme.media.mobile} {
    margin-bottom: 7vh;
  }
`

const ButtonContainer = styled.div`
  transform: rotate(270deg);
  height: 0.5vh;
  margin: 8vh -23px;
  display: flex;
  gap: 16px;
  position: relative;

  @media ${Theme.media.tablet} {
    margin: 10vh -23px 5vh 0;
  }

  @media ${Theme.media.mobile} {
    margin: 0 -23px 8vh 0;
  }
  
  span {
    margin: 0 4px;
    position: absolute;
    left: 32%;
    top: -70%;
  }
`

const LanguageEn = styled.button<LanguagePropsType>`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  color: ${(props) =>
          props.activeEn ? `${Theme.colors.primaryFont}` : `${Theme.colors.secondaryFont}`};
  font-weight: ${(props) =>
          props.activeEn ? 700 : 400};
`

const LanguageRu = styled.button<LanguagePropsType>`
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  color: ${(props) =>
    props.activeRu ? `${Theme.colors.primaryFont}` : `${Theme.colors.secondaryFont}`};
  font-weight: ${(props) =>
    props.activeRu ? 700 : 400};
`

const Name = styled.h2`
  color: ${Theme.colors.primaryFont};
  font-size: calc((100vw - 360px) / (1445 - 360) * (47 - 24) + 24px);
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`

const TextContainer = styled.div`
  margin-bottom: 1.7vh;

  @media ${Theme.media.tablet} {
    margin-bottom: 0;
  }
  
  h1 {
    color: ${Theme.colors.primaryFont};
    font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  span {
    color: ${Theme.colors.primaryFont};
    font-size: calc((100vw - 360px) / (1445 - 360) * (18 - 16) + 16px);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const S ={
    Text,
    Wrapper,
    Main,
    Photo,
    LanguageEn,
    LanguageRu,
    TextContainer,
    Name,
    ButtonContainer
}