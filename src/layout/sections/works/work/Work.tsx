import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string
    src: string
    link?: string
    text: string
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Link href={''}>{props.title}</Link>
            <Text>{props.text}</Text>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  width:100%;
`

const Image = styled.img`
width: 100%;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`