import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

type menuPropsType = {
    menuItems: Array<string>
}

export const Menu = (props: menuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (<ListItem key={index}>
                        <Link href={`#${item}`}>
                            {item}
                        </Link>
                    </ListItem>)
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  padding: 4vh 0;
  position: relative;

  &::after {
    position: absolute;
    top: 11.5vh;
    content: '';
    width: 100%;
    display: inline-block;
    border: 1px solid ${Theme.colors.secondaryFont};
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  @media ${Theme.media.tablet} {
    display: none;
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
