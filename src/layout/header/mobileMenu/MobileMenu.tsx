import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";

type menuPropsType = {
    menuItems: Array<string>
}

export const MobileMenu = (props: menuPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (<ListItem key={index}>
                            <Link href={`#${item}`}>
                                {item}
                            </Link>
                        </ListItem>)
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  padding: 4vh 0;
  position: relative;
  display: none;
  


  @media ${Theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  
  position: fixed;
  background-color: rgba(246, 246, 246, 1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}> `
  display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.primaryFont};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      left: 12px;
      width: 24px;
      height: 2px;
      background-color: ${Theme.colors.primaryFont};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${Theme.colors.primaryFont};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const ListItem = styled.li`
  position: relative;
`

const Link = styled.a`
  color: ${Theme.colors.secondaryFont};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: ${Theme.colors.primaryFont};
    font-weight: bold;
  }
`
