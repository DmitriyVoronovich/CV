import React, {useEffect, useState} from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={scroll.scrollToTop}>
                    <Icon iconId={'goTop'} viewBox={'0 0 40 40'}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  
  @media ${Theme.media.tablet} {
    bottom: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
`