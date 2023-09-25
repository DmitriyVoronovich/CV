import React from 'react';
import styled from "styled-components";
import {Menu} from "./menu/Menu";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const items = ['Home','About me','Skills','Project','Contacts',]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu menuItems={items}/>
                <MobileMenu menuItems={items}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: ${Theme.colors.secondaryBg};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  opacity: 0.95;
`