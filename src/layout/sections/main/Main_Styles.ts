import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

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
  gap: 9vw;
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

const Language = styled.span`
transform: rotate(270deg);
  height: 0.5vh;
  margin: 8vh 0;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  @media ${Theme.media.tablet} {
    margin: 10vh 0 5vh 0;
  }

  @media ${Theme.media.mobile} {
    margin: 0 0 8vh 0;
  }
`

const Name = styled.h2`
  color: ${Theme.colors.primaryFont};
  font-size: calc((100vw - 360px) / (1445 - 360) * (47 - 24) + 24px);
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`

const TextContainer = styled.div`
  margin-bottom: 2vh;
  
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
    Language,
    TextContainer,
    Name
}