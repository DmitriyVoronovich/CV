import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

type WorkPropsType = {
    title: string
    src: string
    link?: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImgWrapper>
                <Image src={props.src}/>
                <Text>{props.text}</Text>
            </ImgWrapper>
            <Link href={''}>{props.title}</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 64vh;
`

const Link = styled.a`
  color: ${Theme.colors.primaryFont};
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  margin: 6vh 0 12vh 0;
`
const Text = styled.p`
  color: ${Theme.colors.secondaryBg};
  width: 60%;
  margin: 0 auto 8vh;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ImgWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
    ${Text} {
      opacity: 1;
    }
  }
  
  ${Text} {
    opacity: 0;
  position: absolute;
  left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) ;
}

`