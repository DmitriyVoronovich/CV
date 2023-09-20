import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

type menuPropsType = {
    menuItems: Array<string>
}

export const Menu = (props: menuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)  => {
                    return (<li key={index}>
                        <a href="">{item}</a>
                    </li>)
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  padding: 32px 0;
  border-bottom: 1px solid ${Theme.colors.secondaryFont};
  
  ul {
    display: flex;
    justify-content: space-between;

    li {

      a {
        color: ${Theme.colors.secondaryFont};
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      
    }
  }
`